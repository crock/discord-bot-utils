# Discord.js Bot Utils

These are some core utilty classes for Discord.js bots that are used in all of [Crock's](https://github.com/crock) discord bots.

## Installation

You can install this package with your Node package manager of choice.

**NPM**

```
npm install @crock/discord-bot-utils
```

**Yarn**

```
yarn add @crock/discord-bot-utils
```

## Usage

**Client module**

```js
import { Client } from '@crock/discord-bot-utils';

Client.getClient();
Client.login();
```

**Auth (permission) module**

```js
import { Auth } from '@crock/discord-bot-utils';

Auth.isOwner(member);
Auth.isAdmin(member);
Auth.isMod(member);
Auth.isRole('foobar', member);
```

**Configuration module**

```js
import { Config } from '@crock/discord-bot-utils';

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
import { DB } from '@crock/discord-bot-utils';

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
