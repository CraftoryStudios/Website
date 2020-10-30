## Server Config

```yml
    error_reporting:
        username: myUsername
    crafting:
        blackListedWorlds:
        - exampleBlacklistedWorld
    general:
        debug: false
        techEnabled: true
    language:
        locale: en-GB
    generators:
        rotaryGeneratorsSpinWhenFull: false
        solarDuringStorms: true
    resourcePack:
        forcePack: true
    fixItemGraphics: false
    wrench:
        powerLoss: 10
    ore:
        blackListedWorlds:
        - exampleBlacklistedWorld
```

-------------------------

### Error Reporting

**Username**
CraftoryTech uses a system called Sentry for automatically reporting of errors to allow us to quickly and easily fix issues. 
By adding a username (eg Discord name, Minecraft name, or anything else) this will allow us to easily assositate errors with you so we can get intouch and help.
This is optional.

-------------------

### Crafting

**Black Listed Worlds**
List of worlds where players don't have access to craft, CraftoryTech recipes. This can be used along side crafting permissions to limit where players can use CraftoryTech.

----------------

### General

**Debug Mode**
Toggling debug turns on debug, this will display more indepth error messages in console.

**Tech Enabled** (Deprecated Feature)
Disabled some old elements of the plugin.

---------------

### Language

**Locale**
Sets the language that CraftoryTech will use for GUIs, Commands, Item Names and more.
This feature won't change the name of already created items only new ones.

Current Languages:
- zh-CN - Simplified Chinese
- en-GB - English, United Kingdom (Default)
- en-US - English, USA
- ru-Ru - Russian
- hu-Hu - Hungarian
- de - De - German
- af_ZA - Afrikaans
- nl_NL - Dutch
- fr_FR - French
- ja_JP - Japanese
- pl_PL - Polish
- pt_BR - Portuguese, Brazilian
- es_ES - Spanish

Check out [Crowdin](https://crowdin.com/project/craftory) to add or update translations!

----------

### Generators

**Rotary Generators Spin When Full**
Default behaviour of Windmills and Waterwheels is to stop spinning when full on energy, this will change that so they spin forever.

**Solar During Storms**
Change if Solar Panels are able to operate during a storm.

-----------

### Resource Pack

**Force Pack**
By default CraftoryTech will host and set its resource pack as the server pack, by changing this options you can stop this allowing you to host pack yourself or merge with your own.

-----------

### Wrench

**Power Loss**
Shift Right click a machine in a wrench will drop it as item with energy still instead. This allows you to config the amount of energy that is lost on pickup.

------------

### Ore

**Black Listed Worlds**
Allows you to black list worlds ores don't spawn in.