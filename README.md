# Discord.js Bot Utils

These are some core utility classes for Discord.js bots.

## Usage

Create a `.env` file in the root directory of your bot with the following keys:
```
# Discord
DISCORD_BOT_TOKEN=

# Miscellaneous Configuration
CMD_PREFIX=
WEB_SERVER_PORT=
API_ROUTE_PREFIX=

# Firebase Configuration
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DB_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
```
Don't forget to call `require('dotenv').config()` in the start file of your bot!

**Client module**

```js
const { Client } = require('@crock/discord-bot-utils');

Client.getClient();
Client.login();
```

**Auth (permission) module**

```js
const { Auth } = require('@crock/discord-bot-utils');

Auth.isOwner(Object member);
Auth.isAdmin(Object member);
Auth.isMod(Object member);
Auth.isRole(String 'foobar', Object member);
```

**Configuration module**

```js
const { Config } = require('@crock/discord-bot-utils');

Config.initConfig();
Config.resetConfig();
Config.reload();
Config.saveConfig();

Config.getBotToken();
Config.getServerPort();
Config.getApiRoutePrefix();
Config.getRef();
Config.getConfig();
Config.getCommandPrefix();
Config.getCommandPrefix();
Config.getChannel(String name);
Config.getRole(String roleType);

Config.setCommandPrefix(String prefix);
Config.setChannel(String channel_type, String id);
Config.setRole(String role_type, String id);
```

**Database module**

```js
const { DB } = require('@crock/discord-bot-utils');

DB.getDatabase();
DB.startListening(String path, String eventType = 'value');
DB.stopListening(String path = null, String eventType = null);

// Firebase database runtime logs are saved in firebase.log file.
// Log files can be found at logs/
DB.logData(data);
// Firebase database errors are saved in firebase.error.log file
DB.errorData(data);

DB.writeData(String path, Object data);
DB.updateData(String path, Object data);
DB.appendData(String path, Object data);
DB.deleteData(String path);
```
