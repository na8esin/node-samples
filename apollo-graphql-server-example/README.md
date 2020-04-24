maximum-length-directive.js

```
{
  "errors": [
    {
      "message": "length too long",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "path": [
        "createBook",
        "title"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "stacktrace": [
            "Error: length too long",
            "    at field.resolve (C:\\Users\\na8esin\\node\\apollo-graphql-server-example\\maximum-length-directive.js:73:16)",
            "    at processTicksAndRejections (internal/process/task_queues.js:93:5)"
          ]
        }
      }
    }
  ],
  "data": {
    "createBook": {
      "title": null
    }
  }
}
```

path が取れてるのがさすがだけど、extensions.code や constraint.maxLength などは別で実装しないといけないので nestjs のほうがいいな
