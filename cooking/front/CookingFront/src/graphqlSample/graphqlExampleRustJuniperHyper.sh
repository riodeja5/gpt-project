#!/bin/bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "{droid(id: \"2000\") {id,name,}}"}' http://127.0.0.1:3000/graphql