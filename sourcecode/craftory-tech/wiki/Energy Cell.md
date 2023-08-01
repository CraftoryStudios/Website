## Overview

Energy Cells are a core part of progression, as you begin to generate
energy, you'll want to store it so you can use it later, or to act as a
buffer. This can allow you to build up a surplus of energy to use when
you need to smelt on mass or any of action that required energy. They
can also Charge up tools!!

There are four different tiers of Energy Cell currently, with each tier
comes upgrades in storage size and energy input and output.

## Tiers

| Tier    | Storage Size              | Input       | Output      |
|:--------|:--------------------------|:------------|:------------|
| Iron    | 400,000 Re                | 200 Re/t    | 200 Re/t    |
| Gold    | 2,000,000 Re (5x Iron)    | 800 Re/t    | 800 Re/t    |
| Diamond | 20,000,000 Re (50x Iron)  | 8,000 Re/t  | 8,000 Re/t  |
| Emerald | 80,000,000 Re (200x Iron) | 32,000 Re/t | 32,000 Re/t |

## Usage

Energy cells can input or output on any side. Any block that is able to
provider energy that is placed directly next to it will start
transfering energy to the cells storage.

Right clicking on the block will open the GUI, this will allow you to
see an Energy Bar showing the percentage of how full the cell is.
Hovering the cursor over this will provide full details.

The block is also able to output energy on any of its six sides, by
default this is disabled. By opening the blocks GUI you can click on the
output config to change which sides will allow outputing energy on. (For
performance it is better to only set the sides you will use) More info
on Output Config

## Charging Tools

All energy cells have a slot at the bottom of the GUI, by placing a
electric tool in this slot the tool will begin to charge. Hovering over
the item will allow you to see the energy increase.

## Power Grid

Energy Cells can be connected to a power grid via a Power Connector.
They have the lowest priority and will only be filled up after all
machines in the grid are full. They will be filled up one at a time
instead of the energy being split equally. Power Grids Info

## Breaking and Placing

Energy cells can be instantly broken by any tool including player hand
instantly (this will be changed in the future).

When placed the block will not face the direction the player was facing,
it will orient its self to always face North (this will be changed in
the future).

## Redstone Control

A Energy Cell can be disabled by providing a redstone siginal to the
block. This will disable energy transfer in and out of the block.

## Recipes

![Iron Furnace Recipe](/Website/assets/craftory-tech/crafting/iron_cell_recipe.png)

![Gold Furnace Recipe](/Website/assets/craftory-tech/crafting/gold_cell_recipe.png)

![Diamond Furnace Recipe](/Website/assets/craftory-tech/crafting/diamond_cell_recipe.png)

![Emerald Furnace Recipe](/Website/assets/craftory-tech/crafting/emerald_cell_recipe.png)
