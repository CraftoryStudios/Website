# Items Adder Compatibility
This guide cover how to get Craftory Tech and Items Adder working together. 
Unfortunately by default there are some conflicting item Id's so if your not setting ItemsAdder up for the first time, you'll have slightly more work to do.

When editing config files please edit the existing options and don't add new ones, the layout may look slightly different in the files, but all options names are correct.

# Setup
1. Download both Craftory and ItemsAdder jars and place in plugins, along with any required plugins
2. Run the server to generate config files (stop the server before proceeding)
3. Inside plugins/Craftory open the config file and make the following changes:
    ```yml
    resourcePack:
        forcePack: false
    ```
4. Inside plugins/ItemAdder open the config file and make the following changes:
    ```yml
    blocks:
        disable-REAL: true
    ```

Now the basics are out the way, please pick one of the following options that applies to you:


## I had Craftory Tech installed and being used on my server already:
## I had neither Craftory nor ItemsAdder installed and being used on my server already:
5. Inside plugins/ItemsAdder open the config file and make the following changes:
    ```yml
    resource-pack:
        items:
            CustomModelData-starting-value:
                ALL: 200000
                DIAMOND: 210000
    ```
(This will stop ItemsAdder from using the same id's as Craftory Tech)
6. Inside plugins/ItemsAdder delete the *storage* and *data* folders (when the server is stopped)
*Continue to step 7*

## I had ItemsAdder installed and being used on my server already:
Coming Soon



## Last steps
7. Download Craftory resource pack from the following link https://github.com/CraftoryStudios/Craftory-Tech/tree/v0.8.2/resourcepacks
You have the option to download pipes.zip (which includes TransportPipes pre merged) or original.zip (default)
NOTE: replace v0.8.2 with the version of Craftory you are using. 

8. Next step is to merge the resource packs and host them, theres two ways to go about this:

*ItemsAdder*
ItemsAdder is able to merge resource packs. Following this [GUIDE](https://itemsadder.devs.beer/plugin-usage/merge-resourcepacks), place the assets folder of the Craftory resourcepack into IA and run /iazip. 
Then follow IA's guide on hosting methods found on their wiki.

*OR*

*Manually*
Download Item Adder resource pack and manually merge the two resource packs together. There are many guides on the internet, but if you drag one asset folder into the other and copy. Any conflicts between files, both files should be opened and manually merged.

Host the finished resource pack on dropbox, a preferred hosting service or https://mc-packs.net/