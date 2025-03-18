/*
 * @Author: Angelo
 * @Date: 2024-11-01 14:33:15
 * @version: 
 * @Descripttion: 
 */
const { InfluxDB } = require('@influxdata/influxdb-client');
const ExcelJS = require('exceljs');
const fs = require('fs');

// InfluxDB配置
const url = 'http://localhost:8086';
const token = 'your_token';
const org = 'your_org';
const bucket = 'iot';

// 创建InfluxDB客户端
const queryApi = new InfluxDB({ url, token }).getQueryApi(org);

// 查询语句
const query = `
from(bucket: "${bucket}")
|> range(start: -3h)
|> filter(fn: (r) => r["_measurement"] == "lift")
|> filter(fn: (r) => r["_field"] == "deviceTime" or r["_field"] == "accelZ" or r["_field"] == "accelY" or r["_field"] == "accelX")
|> filter(fn: (r) => r["deviceId"] == "WT6300003435")
|> sort(columns:["_time"], desc: true)
`;

// 执行查询并处理结果
queryApi.queryRows(query, org).then(rows => {
    // 创建一个新的Excel工作簿
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Lift Data');

    // 添加表头
    worksheet.columns = [
        { header: 'Time', key: 'time', width: 20 },
        { header: 'Field', key: 'field', width: 20 },
        { header: 'Value', key: 'value', width: 20 },
    ];

    // 将查询结果添加到工作表中
    rows.forEach(row => {
        worksheet.addRow({
            time: row.getTime(),
            field: row.getField(),
            value: row.getValue()
        });
    });

    // 保存Excel文件
    const filePath = './lift_data.xlsx';
    workbook.xlsx.writeFile(filePath)
        .then(() => {
            console.log(`Data exported successfully to ${filePath}`);
        })
        .catch(err => {
            console.error('Error writing Excel file:', err);
        });
}).catch(err => {
    console.error('Error querying InfluxDB:', err);
});
