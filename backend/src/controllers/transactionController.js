const Transaction = require('../models/transaction');
const { Op, fn, col } = require('sequelize');

exports.getAllTransactions = async (req, res) => {
    const { month, page = 1, perPage = 10, search = '' } = req.query;
    const offset = (page - 1) * perPage;

    try {
        const whereClause = {
            dateOfSale: {
                [Op.between]: [`2023-${month}-01`, `2023-${month}-31`]
            },
            [Op.or]: [
                { title: { [Op.like]: `%${search}%` } },
                { description: { [Op.like]: `%${search}%` } },
                { price: { [Op.like]: `%${search}%` } }
            ]
        };

        const transactions = await Transaction.findAndCountAll({
            where: whereClause,
            limit: perPage,
            offset,
        });

        res.status(200).json({
            totalPages: Math.ceil(transactions.count / perPage),
            currentPage: page,
            transactions: transactions.rows
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStatistics = async (req, res) => {
    const { month } = req.query;

    try {
        const totalSaleAmount = await Transaction.sum('price', {
            where: {
                dateOfSale: {
                    [Op.between]: [`2023-${month}-01`, `2023-${month}-31`]
                }
            }
        });

        const totalSoldItems = await Transaction.count({
            where: {
                dateOfSale: {
                    [Op.between]: [`2023-${month}-01`, `2023-${month}-31`]
                },
                sold: true
            }
        });

        const totalNotSoldItems = await Transaction.count({
            where: {
                dateOfSale: {
                    [Op.between]: [`2023-${month}-01`, `2023-${month}-31`]
                },
                sold: false
            }
        });

        res.status(200).json({
            totalSaleAmount,
            totalSoldItems,
            totalNotSoldItems
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBarChartData = async (req, res) => {
    const { month } = req.query;

    try {
        const ranges = [
            [0, 100], [101, 200], [201, 300], [301, 400], [401, 500],
            [501, 600], [601, 700], [701, 800], [801, 900], [901, Number.MAX_SAFE_INTEGER]
        ];

        const barChartData = await Promise.all(
            ranges.map(async ([min, max]) => {
                const count = await Transaction.count({
                    where: {
                        dateOfSale: {
                            [Op.between]: [`2023-${month}-01`, `2023-${month}-31`]
                        },
                        price: {
                            [Op.between]: [min, max]
                        }
                    }
                });
                return { range: `${min}-${max}`, count };
            })
        );

        res.status(200).json(barChartData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPieChartData = async (req, res) => {
    const { month } = req.query;

    try {
        const pieChartData = await Transaction.findAll({
            attributes: [
                'category',
                [fn('COUNT', col('category')), 'count']
            ],
            where: {
                dateOfSale: {
                    [Op.between]: [`2023-${month}-01`, `2023-${month}-31`]
                }
            },
            group: 'category'
        });

        res.status(200).json(pieChartData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCombinedData = async (req, res) => {
    const { month } = req.query;

    try {
        const [statistics, barChartData, pieChartData] = await Promise.all([
            exports.getStatistics(req, res),
            exports.getBarChartData(req, res),
            exports.getPieChartData(req, res)
        ]);

        res.status(200).json({
            statistics,
            barChartData,
            pieChartData
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
