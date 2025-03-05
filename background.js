chrome.commands.onCommand.addListener(function(command) {
    let tabIndex;
    if (command.startsWith('num')) {
        tabIndex = parseInt(command.replace('num', '')) - 1;  
    }
    chrome.windows.getCurrent({ populate: true }, function(window) {
        const tabs = window.tabs;
        if (tabIndex >= tabs.length) {
            tabIndex = tabs.length - 1; 
        }        
        chrome.tabs.update(tabs[tabIndex].id, { active: true });
    });
});
