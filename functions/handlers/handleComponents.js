const { readdirsync } = require("fs")

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolders = readdirsync(`./components`);
        for (const folder of componentFolders) {
            const componentFiles = readdirsync(`./components/${folder}`).filter(
                (file) => file.endsWith(".js")
            );


            const { buttons, selectMenus, modals } = client;

            switch (folder) {
                case "buttons":
                    for (const file of componentFiles){
                        const button = require(`../../compnents/${folder}/${file}`);
                        buttons.set(button.data.name, button);
                    }
                        break;

                case "selectMenus":
                    for (const file of componentFiles){
                        const menu = require(`../../compnents/${folder}/${file}`);
                        selectMenus.set(menu.data.name, menu);
                    }
                    break;

                case "modals":
                    for (const file of componentFiles){
                        const modal = require(`../../compnents/${folder}/${file}`);
                        modals.set(modal.data.name, modal);
                    }
                    break;

                default:
                    break;
            }

        }

    }
}