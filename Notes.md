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

```sql
-- run server
mongod 

-- run client
mongo
```

## CRUD Operations

```sql
-- insert
db.collection.insertOne()
db.collection.insertMany()
```