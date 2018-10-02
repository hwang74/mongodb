# mongodb

## Concepts

| mongodb                     | relational database     |
| --------------------------- | ----------------------- |
| database                    | database                |
| collection                  | table                   |
| document                    | row                     |
| lookup                      | join                    |
| reference                   | foreign key             |
| single document transaction | multi-table transaction |

### Notes

Namespace: database x collection
Authorization: document level

## CLI Commands

### Connection

```shell
// run local server
mongod

// connect to cluster
mongod <connection string>

// run client
mongo
```

### Operations

| mongodb                                                                          | relational database                           |
| -------------------------------------------------------------------------------- | --------------------------------------------- |
| show dbs                                                                         | show all databases                            |
| show collections                                                                 | show all collections                          |
| use \<database>                                                                  | switch to \<database>                         |
| load("\<file>")                                                                  | load data                                     |
| db.\<collection>.insertOne()                                                     | insert a document                             |
| db.\<collection>.insertManu()                                                    | insert multiple documents                     |
| - ordered operator                                                               | skip error                                    |
| db.\<collection>.find()                                                          | read data with filters                        |
| - projection operator                                                            | specify which fields to return and not return |
| db.\<collection>.updateOne()                                                     | update first matching document                |
| db.\<collection>.updateMany()                                                    | update all matching documents                 |
| - upsert operator                                                                | update when found or insert when not found    |
| - [update operators](https://docs.mongodb.com/manual/reference/operator/update/) |                                               |
| -- $inc                                                                          |
| -- $mul                                                                          |
| -- $rename                                                                       |
| -- $set                                                                          |
| -- $set                                                                          |
| -- $unset                                                                        |
| -- $min                                                                          | mongo                                         |
| -- $max                                                                          |
| -- $push                                                                         |
| -- $each                                                                         |
| db.\<collectin>.replaceOne()                                                     | delete first matching document                |
| db.\<collectin>.deleteOne()                                                      | replace first matching document               |
| db.\<collectin>.deleteMany()                                                     | delete all matching documents                 |

```shell
// create
db.collection.insertOne({"title": "test"})
db.collection.insertMany({"title": "test"}, {"ordered": false})

// read
db.collection.find({"title": "test"})
db.collection.find({"title": "test"}, {"title": 1, "_id": 0}).pretty()

// update
db.collection.updateOne({_id: 0}, {$set: {title: "test 2"}}, {upsert: true})

// delete

```