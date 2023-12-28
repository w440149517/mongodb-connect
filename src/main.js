const MongoClient = require('mongodb').MongoClient

async function initMongo(dbName, collectionName, json) {
    let client;
    try {
        // 连接到 MongoDB 数据库
        client = await MongoClient.connect('mongodb://localhost:27017/');
        const db = client.db(dbName);

        // 插入数据，如果集合不存在，MongoDB 会自动创建它
        await db.collection(collectionName).insertMany(json);

        console.log(collectionName, 'Data inserted successfully');
    } catch (err) {
        // 处理可能发生的任何错误
        console.error('Error occurred:', err);
    } finally {
        // 关闭数据库连接
        if (client) {
            await client.close();
        }
    }
}

function get1stObj(json) {
    const key1st = Object.keys(json)[0]
    return json[key1st]
}
// initMongo('platformSalses', 'assemblyProject', require('./mysqlJson/assembly_project_202312261732.json').assembly_project)
initMongo('platformSalses', 'assemblyAppTemplatePage', get1stObj(require('./mysqlJson/assembly_app_template_page_202312261732.json')))
initMongo('platformSalses', 'assemblyAppTemplete', get1stObj(require('./mysqlJson/assembly_app_templete_202312261732.json')))
initMongo('platformSalses', 'assemblyComponents', get1stObj(require('./mysqlJson/assembly_components_202312261732.json')))
// initMongo('platformSalses', 'assemblyDeployLogs', get1stObj(require('./mysqlJson/assembly_deploy_logs_202312261732.json')))
initMongo('platformSalses', 'assemblyEnvVariables', get1stObj(require('./mysqlJson/assembly_env_variables_202312261732.json')))
initMongo('platformSalses', 'assemblyPages', get1stObj(require('./mysqlJson/assembly_pages_202312261732.json')))
initMongo('platformSalses', 'assemblyProjectPages', get1stObj(require('./mysqlJson/assembly_project_pages_202312261732.json')))
initMongo('platformSalses', 'assemblyStyles', get1stObj(require('./mysqlJson/assembly_styles_202312261732.json')))
initMongo('platformSalses', 'assemblyTeam', get1stObj(require('./mysqlJson/assembly_team_202312261732.json')))
initMongo('platformSalses', 'assemblyTeamMember', get1stObj(require('./mysqlJson/assembly_team_member_202312261732.json')))


// const logs = require('./mysqlJson/assembly_deploy_logs_202312261732.json').assembly_deploy_logs
// console.log(logs[0])

