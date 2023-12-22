export const dataCube = {
    cubes: [
        {
            name: "LineItems",
            title: "Sold Items",
            connectedComponent: 1,
            measures: [
                {
                    name: "LineItems.count",
                    title: "Sold Items Count",
                    shortTitle: "Count",
                    cumulativeTotal: false,
                    cumulative: false,
                    type: "number",
                    aggType: "count",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
                {
                    name: "LineItems.totalAmount",
                    title: "Sold Items Total Amount",
                    shortTitle: "Total Amount",
                    format: "currency",
                    cumulativeTotal: true,
                    cumulative: true,
                    type: "number",
                    aggType: "runningTotal",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
                {
                    name: "LineItems.cumulativeTotalRevenue",
                    title: "Sold Items Cumulative Total Revenue",
                    shortTitle: "Cumulative Total Revenue",
                    format: "currency",
                    cumulativeTotal: true,
                    cumulative: true,
                    type: "number",
                    aggType: "runningTotal",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
            ],
            dimensions: [
                {
                    name: "LineItems.quantity",
                    title: "Sold Items Quantity",
                    type: "number",
                    shortTitle: "Quantity",
                    suggestFilterValues: true,
                    isVisible: true,
                },
                {
                    name: "LineItems.price",
                    title: "Sold Items Price",
                    type: "number",
                    shortTitle: "Price",
                    suggestFilterValues: true,
                    format: "currency",
                    isVisible: true,
                },
                {
                    name: "LineItems.createdAt",
                    title: "Sold Items Created at",
                    type: "time",
                    shortTitle: "Created at",
                    suggestFilterValues: true,
                    isVisible: true,
                },
            ],
            segments: [],
        },
        {
            name: "Orders",
            title: "Orders",
            connectedComponent: 1,
            measures: [
                {
                    name: "Orders.count",
                    title: "Orders Count",
                    shortTitle: "Count",
                    cumulativeTotal: false,
                    cumulative: false,
                    type: "number",
                    aggType: "count",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
                {
                    name: "Orders.totalAmount",
                    title: "Orders Total Amount",
                    shortTitle: "Total Amount",
                    format: "currency",
                    cumulativeTotal: false,
                    cumulative: false,
                    type: "number",
                    aggType: "sum",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
            ],
            dimensions: [
                {
                    name: "Orders.status",
                    title: "Orders Status",
                    type: "string",
                    description: "Status of order",
                    shortTitle: "Status",
                    suggestFilterValues: true,
                    isVisible: true,
                },
                {
                    name: "Orders.completedAt",
                    title: "Orders Completed at",
                    type: "time",
                    shortTitle: "Completed at",
                    suggestFilterValues: true,
                    isVisible: true,
                },
                {
                    name: "Orders.createdAt",
                    title: "Orders Created at",
                    type: "time",
                    shortTitle: "Created at",
                    suggestFilterValues: true,
                    isVisible: true,
                },
                {
                    name: "Orders.amountTier",
                    title: "Orders Amount Tier",
                    type: "string",
                    shortTitle: "Amount Tier",
                    suggestFilterValues: true,
                    isVisible: true,
                },
            ],
            segments: [
                {
                    name: "Orders.completed",
                    title: "Orders Completed",
                    shortTitle: "Completed",
                    isVisible: true,
                },
                {
                    name: "Orders.processing",
                    title: "Orders Processing",
                    shortTitle: "Processing",
                    isVisible: true,
                },
                {
                    name: "Orders.shipped",
                    title: "Orders Shipped",
                    shortTitle: "Shipped",
                    isVisible: true,
                },
            ],
        },
        {
            name: "ProductCategories",
            title: "Product Categories",
            connectedComponent: 1,
            measures: [],
            dimensions: [
                {
                    name: "ProductCategories.name",
                    title: "Product Categories Name",
                    type: "string",
                    shortTitle: "Name",
                    suggestFilterValues: true,
                    isVisible: true,
                },
            ],
            segments: [],
        },
        {
            name: "Products",
            title: "Products",
            connectedComponent: 1,
            measures: [
                {
                    name: "Products.count",
                    title: "Products Count",
                    shortTitle: "Count",
                    cumulativeTotal: false,
                    cumulative: false,
                    type: "number",
                    aggType: "number",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
            ],
            dimensions: [
                {
                    name: "Products.name",
                    title: "Products Name",
                    type: "string",
                    shortTitle: "Name",
                    suggestFilterValues: true,
                    isVisible: true,
                },
            ],
            segments: [],
        },
    ],
};

export const dataS = {
    cubes: [
        {
            name: "LineItems",
            title: "Sold Items",
            connectedComponent: 1,
            measures: [
                {
                    name: "LineItems.count",
                    title: "Sold Items Count",
                    shortTitle: "Count",
                    cumulativeTotal: false,
                    cumulative: false,
                    type: "number",
                    aggType: "count",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
                {
                    name: "LineItems.totalAmount",
                    title: "Sold Items Total Amount",
                    shortTitle: "Total Amount",
                    format: "currency",
                    cumulativeTotal: true,
                    cumulative: true,
                    type: "number",
                    aggType: "runningTotal",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
                {
                    name: "LineItems.cumulativeTotalRevenue",
                    title: "Sold Items Cumulative Total Revenue",
                    shortTitle: "Cumulative Total Revenue",
                    format: "currency",
                    cumulativeTotal: true,
                    cumulative: true,
                    type: "number",
                    aggType: "runningTotal",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
            ],
            dimensions: [
                {
                    name: "LineItems.quantity",
                    title: "Sold Items Quantity",
                    type: "number",
                    shortTitle: "Quantity",
                    suggestFilterValues: true,
                    isVisible: true,
                },
                {
                    name: "LineItems.price",
                    title: "Sold Items Price",
                    type: "number",
                    shortTitle: "Price",
                    suggestFilterValues: true,
                    format: "currency",
                    isVisible: true,
                },
                {
                    name: "LineItems.createdAt",
                    title: "Sold Items Created at",
                    type: "time",
                    shortTitle: "Created at",
                    suggestFilterValues: true,
                    isVisible: true,
                },
            ],
            segments: [],
        },
        {
            name: "Orders",
            title: "Orders",
            connectedComponent: 1,
            measures: [
                {
                    name: "Orders.count",
                    title: "Orders Count",
                    shortTitle: "Count",
                    cumulativeTotal: false,
                    cumulative: false,
                    type: "number",
                    aggType: "count",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
                {
                    name: "Orders.totalAmount",
                    title: "Orders Total Amount",
                    shortTitle: "Total Amount",
                    format: "currency",
                    cumulativeTotal: false,
                    cumulative: false,
                    type: "number",
                    aggType: "sum",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
            ],
            dimensions: [
                {
                    name: "Orders.status",
                    title: "Orders Status",
                    type: "string",
                    description: "Status of order",
                    shortTitle: "Status",
                    suggestFilterValues: true,
                    isVisible: true,
                },
                {
                    name: "Orders.completedAt",
                    title: "Orders Completed at",
                    type: "time",
                    shortTitle: "Completed at",
                    suggestFilterValues: true,
                    isVisible: true,
                },
                {
                    name: "Orders.createdAt",
                    title: "Orders Created at",
                    type: "time",
                    shortTitle: "Created at",
                    suggestFilterValues: true,
                    isVisible: true,
                },
                {
                    name: "Orders.amountTier",
                    title: "Orders Amount Tier",
                    type: "string",
                    shortTitle: "Amount Tier",
                    suggestFilterValues: true,
                    isVisible: true,
                },
            ],
            segments: [
                {
                    name: "Orders.completed",
                    title: "Orders Completed",
                    shortTitle: "Completed",
                    isVisible: true,
                },
                {
                    name: "Orders.processing",
                    title: "Orders Processing",
                    shortTitle: "Processing",
                    isVisible: true,
                },
                {
                    name: "Orders.shipped",
                    title: "Orders Shipped",
                    shortTitle: "Shipped",
                    isVisible: true,
                },
            ],
        },
        {
            name: "ProductCategories",
            title: "Product Categories",
            connectedComponent: 1,
            measures: [],
            dimensions: [
                {
                    name: "ProductCategories.name",
                    title: "Product Categories Name",
                    type: "string",
                    shortTitle: "Name",
                    suggestFilterValues: true,
                    isVisible: true,
                },
            ],
            segments: [],
        },
        {
            name: "Products",
            title: "Products",
            connectedComponent: 1,
            measures: [
                {
                    name: "Products.count",
                    title: "Products Count",
                    shortTitle: "Count",
                    cumulativeTotal: false,
                    cumulative: false,
                    type: "number",
                    aggType: "number",
                    drillMembers: [],
                    drillMembersGrouped: {
                        measures: [],
                        dimensions: [],
                    },
                    isVisible: true,
                },
            ],
            dimensions: [
                {
                    name: "Products.name",
                    title: "Products Name",
                    type: "string",
                    shortTitle: "Name",
                    suggestFilterValues: true,
                    isVisible: true,
                },
            ],
            segments: [],
        },
    ],
};

export const defaultDatas = {
    dashboardItems: [
        {
            id: "10",
            layout: '{"x":9,"y":8,"w":15,"h":8}',
            vizState:
                '{"query":{"measures":["Orders.count"],"timeDimensions":[{"dimension":"Orders.createdAt","granularity":"month"}],"dimensions":["Orders.status"]},"chartType":"bar","sessionGranularity":"month"}',
            name: "Orders by Status Over Time",
            __typename: "DashboardItem",
        },
        {
            id: "14",
            layout: '{"x":0,"y":0,"w":13,"h":8}',
            vizState:
                '{"query":{"measures":["LineItems.cumulativeTotalRevenue"],"timeDimensions":[{"dimension":"LineItems.createdAt","granularity":"month","dateRange":"Last year"}]},"chartType":"area","sessionGranularity":"month"}',
            name: "Revenue Growth Last Year",
            __typename: "DashboardItem",
        },
        {
            id: "15",
            layout: '{"x":13,"y":0,"w":11,"h":8}',
            vizState:
                '{"query":{"measures":["Orders.count"],"timeDimensions":[{"dimension":"Orders.completedAt","granularity":"day","dateRange":"Last 30 days"}],"filters":[{"dimension":"Orders.status","operator":"equals","values":["completed"]}]},"chartType":"line"}',
            name: "Completed Orders Last 30 days",
            __typename: "DashboardItem",
        },
        {
            id: "16",
            layout: '{"x":0,"y":16,"w":24,"h":8}',
            vizState:
                '{"query":{"measures":["Orders.count"],"timeDimensions":[{"dimension":"Orders.completedAt"}],"dimensions":["ProductCategories.name"]},"chartType":"bar"}',
            name: "Orders by Product Category Name",
            __typename: "DashboardItem",
        },
        {
            id: "17",
            layout: '{"x":0,"y":8,"w":9,"h":8}',
            vizState:
                '{"query":{"dimensions":["Orders.amountTier"],"timeDimensions":[{"dimension":"Orders.completedAt"}],"measures":["Orders.count"],"filters":[{"dimension":"Orders.amountTier","operator":"notEquals","values":["$0 - $100"]}]},"chartType":"pie"}',
            name: "Orders by Price Tiers",
            __typename: "DashboardItem",
        },
    ],
};

export const dataForDefault = {
    dashboardItems: [
        {
            id: "10",
            layout: { x: 9, y: 8, w: 15, h: 8 },
            vizState: {
                query: {
                    measures: ["Orders.count"],
                    timeDimensions: [
                        { dimension: "Orders.createdAt", granularity: "month" },
                    ],
                    dimensions: ["Orders.status"],
                },
                chartType: "bar",
                sessionGranularity: "month",
            },
            name: "Orders by Status Over Time",
            __typename: "DashboardItem",
        },
        {
            id: "14",
            layout: { x: 0, y: 0, w: 13, h: 8 },
            vizState: {
                query: {
                    measures: ["LineItems.cumulativeTotalRevenue"],
                    timeDimensions: [
                        {
                            dimension: "LineItems.createdAt",
                            granularity: "month",
                            dateRange: "Last year",
                        },
                    ],
                },
                chartType: "area",
                sessionGranularity: "month",
            },
            name: "Revenue Growth Last Year",
            __typename: "DashboardItem",
        },
        {
            id: "15",
            layout: { x: 13, y: 0, w: 11, h: 8 },
            vizState: {
                query: {
                    measures: ["Orders.count"],
                    timeDimensions: [
                        {
                            dimension: "Orders.completedAt",
                            granularity: "day",
                            dateRange: "Last 30 days",
                        },
                    ],
                    filters: [
                        {
                            dimension: "Orders.status",
                            operator: "equals",
                            values: ["completed"],
                        },
                    ],
                },
                chartType: "line",
            },
            name: "Completed Orders Last 30 days",
            __typename: "DashboardItem",
        },
        {
            id: "16",
            layout: { x: 0, y: 16, w: 24, h: 8 },
            vizState: {
                query: {
                    measures: ["Orders.count"],
                    timeDimensions: [{ dimension: "Orders.completedAt" }],
                    dimensions: ["ProductCategories.name"],
                },
                chartType: "bar",
            },
            name: "Orders by Product Category Name",
            __typename: "DashboardItem",
        },
        {
            id: "17",
            layout: { x: 0, y: 8, w: 9, h: 8 },
            vizState: {
                query: {
                    dimensions: ["Orders.amountTier"],
                    timeDimensions: [{ dimension: "Orders.completedAt" }],
                    measures: ["Orders.count"],
                    filters: [
                        {
                            dimension: "Orders.amountTier",
                            operator: "notEquals",
                            values: ["$0 - $100"],
                        },
                    ],
                },
                chartType: "pie",
            },
            name: "Orders by Price Tiers",
            __typename: "DashboardItem",
        },
    ],
};
