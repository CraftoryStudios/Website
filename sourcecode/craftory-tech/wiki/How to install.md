## Server
You'll need a working Spigot server instance to use Craftory Tech. You can also use forks of spigot including Paper, Purpur and others, although the plugin is only tested and guaranteed to work on Spigot and Paper. 

We always recommend using a Paper server over Spigot. [Paper Getting Started](https://paper.readthedocs.io/en/latest/server/getting-started.html)

## Downloading the plugin
There are multiple places you can obtain a copy of the plugin:

- [Spigot Page](https://www.spigotmc.org/resources/craftory-tech.81151/)
- [Craftory Studios Website](https://craftory.studio/craftory-tech/releases/)
- [Github](https://github.com/CraftoryStudios/Craftory-Tech/releases)

Do not download the plugin from any other location as this is likely a copy and not supported by us. Further more please report any site found to be distributing illegitimate copies of the plugin.

## Installing the plugin
Once you have the `.jar` file, place it in the `plugins/` directory of your Paper instance, then restart your server. You will now see in the console startup messages from the plugin, as well as a `Craftory` folder will be generated in the `plugins/` directory of your Paper instance.

## Configuring the plugin
Changing configuration isn't needed in most cases. If you need to do this we recommend stopping the server first, as the plugin doesn't support hot reloading of the config. Also ensure your server has been run at least once with the plugin first to generate the required config files mentioned above.

To make changes navigate to the `plugins/` directory of your Paper instance, then into the `Craftory` directory which would have been generated from running the server and then stopping it. 

Inside the directory you will find a `config.yml` file, this is the main configuration file and should be all 90% of people will need to edit to customize your experience, do not edit any other files unless you know what you are doing. We will have further guides for more in-depth configuration.

## Optional Dependencies
Craftory Tech will work alongside the majority of other plugins without needing to officially support them, although we have a few plugins that we add support for to allow additional features.

- [LightAPI](https://github.com/Qveshn/LightAPI/releases) Allows machines to produce light (This doesn't work on 1.17 versions of Paper due to limitations beyond our control)
- [TransportPipes](https://github.com/BlackBeltPanda/Transport-Pipes/releases) Adds pipes which can insert and extract items into machines and more. This plugin uses it's own resource pack which you must disable before use. To do this set `resourcepack_mode` to `server` in the transport pipes config.yml file in your server instance.
- [mcMMO](https://www.spigotmc.org/resources/official-mcmmo-original-author-returns.64348/) 

### Protection Plugins
We also offer support for the following protection plugins to block access to protected machines, as well as limit what blocks our tools and machines can break.

- WorldGuard
- Towny
- GriefPrevention
- LWC
- PreciousStones
- Lockette
- RedProtect
- BentoBox
- BlockLocker
- Lands
- ChestProtect
- Factions
- FunnyGuilds
- PlotSquared