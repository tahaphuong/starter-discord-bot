let listCommands = [
  {
    "name": "hello",
    "description": "replies with Hallo!",
    "options": []
  },
  {
    "name": "add",
    "description": "Add a habit to track (●'◡'●)",
    "options": [
      {
        "name": "habit name",
        "description": "Something you want to track. Example: drink 1l water",
        "type": 3,
        "required": True,
      },
      {
        "name": "duration",
        "description": "Set a duration. Default 30 days.",
        "type": 4,
        "required": False,
      }
    ]
  }
]
module.exports = {listCommands}
