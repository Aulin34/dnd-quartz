---
banner: https://alliancehealthprofessionals.com/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png
banner-x: 50
banner-y: 54
---
---
<%*
let name = await tp.system.prompt("Location Name");
let groupCount = parseInt(await tp.system.prompt("How many races?"));

let populationTable = `> ###### Population:\n> | | |\n> | ----- | ----- |\n`;
for (let i = 1; i <= groupCount; i++) {
    let groupName = await tp.system.prompt(`Race ${i} name`);
    let groupNote = await tp.system.prompt(`Race ${i} percentage`) + (`%`);
    populationTable += `> | ${groupName} | ${groupNote} |\n`;
}

let laws = await tp.system.prompt("Laws");
let wealth = await tp.system.prompt("Wealth level");
let government = await tp.system.prompt("Type of governance");
let unrest = await tp.system.prompt("Level of unrest or peace");
let kingdom = await tp.system.prompt("Affiliated kingdom or sovereign");

tR += `> [!infobox]\n`;
tR += `> # ${name}\n`;
tR += `> ![[example.jpg]]\n`;
tR += populationTable;
tR += `>\n`;
tR += `> ##### Information\n`;
tR += `> | | |\n`;
tR += `> | ---- | ---- |\n`;
tR += `> | Laws | ${laws} |\n`;
tR += `> | Wealth | ${wealth} |\n`;
tR += `> | Government | ${government} |\n`;
tR += `> | Civil Unrest | ${unrest} |\n`;
tR += `> | Kingdom | ${kingdom} |\n`;
%>


This is where you write the lore of the location.