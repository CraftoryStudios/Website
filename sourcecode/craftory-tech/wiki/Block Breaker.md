## Overview

Block Breakers, as the name suggested can be used to automatically break
blocks. Great for automation and many other things. When placed they can
be trigger by pulsing a redstone signal, as long as there is a valid
block in front and they have enough power, they will break it and return
the result.

## Tiers

| Tier         | Storage Size | Speed          | Energy Usage          | Max Recieve |
|:-------------|:-------------|:---------------|:----------------------|:------------|
| Block Breaker | 40,000 Re    | Redstone Based | 1200 Re per Operation | 10,000 Re/t |


## Usage

When placed it will face the direction the player is facing. It then
requires energy to operate, 1200 Re is used to break a block. If the
block is triggered with no block to break it will use 120 Re (Server
Configurable).

It will break the block in front of it when supplied with a Redstone
pulse, as detailed in Redstone Control Section bellow. If there is
nothing behind the block it will throw the item on the ground.

If a Chest or block with inventory is placed behind (No Custom Blocks),
then it will insert the items into this inventory. Hoppers can be
chained to take items away. If Inventory is full, extra items will be
dropped.

## Power Grid

Block Breakers can be connected to a power grid with a power connector,
as with all machines.

## Breaking and Placing

Block Breaker can be instantly broken by any tool including player hand
instantly (this will be changed in the future).

When placed this block is directional so will face the same direction
the player is looking. It can't face UP or DOWN, but can face any other
direction.

## Redstone Control

When a Block Breaker receives a redstone pulse, if it can, it will break
the block in front of it.

A Redstone Pulse counts as the block having a direct redstone power
level of 0 and then anything above 0 will cause it to trigger.


## Recipes

![Block Breaker Recipe](/Website/assets/craftory-tech/crafting/block_breaker.png)
