// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('platformSalses');

// Create a new document in the collection.
const json = require('./mysqlJson/assembly_project_202312261732.json')
db.getCollection('assemblyProject').insertMany(json.assembly_project)
