## Overview

Block Placers are capable of placing blocks in their inventory in front
of them. To do this they require energy, a place able block in their
inventory and AIR in front of them.

## Tiers

| Tier         | Storage Size | Speed          | Energy Usage          | Max Recieve |
|:-------------|:-------------|:---------------|:----------------------|:------------|
| Block Placer | 40,000 Re    | Redstone Based | 1000 Re per Operation | 10,000 Re/t |


## Usage

When placed it will face the direction the player is facing. It then
requires energy to operate, 1000 Re is used to place a block. If the
block is triggered, but it is unable to place a block, it will use 100
Re (Server Configurable).

It's GUI can be accessed by right clicking, any placeable block can be
inserted here. On a redstone pulse, detailed in the Redstone Control
Section bellow, it will attempt to place the block infront of it.

It can only place a block if the energy requirements are met, AIR is
infront and the block in inventory is valid. Hoppers can be used to
insert items into the inventory.

## Power Grid

Block Placer can be connected to a power grid with a power connector, as
with all machines.

## Breaking and Placing

Block Placer can be instantly broken by any tool including player hand
instantly (this will be changed in the future).

When placed this block is directional so will face the same direction
the player is looking. It can't face UP or DOWN, but can face any other
direction.

## Redstone Control

When a Block Placer receives a redstone pulse, if it can, it will place
the block in its inventory in front of it.

A Redstone Pulse counts as the block having a direct redstone power
level of 0 and then anything above 0 will cause it to trigger.


## Recipes

..
