var current_time = "search_current_time";

/*
Open google search tab.
*/
function kholgugal(search_query, active) {
  var selected_text = encodeURIComponent(search_query);
  var google_search_url = "https://www.google.com/search?q=time+in+" + selected_text;

  browser.tabs.create({
    url: google_search_url,
    active: active
  });
}

function gettime(loc)
{
  
}

/*
Create the context menu items.
*/
browser.menus.create({
  id: current_time,
  title: "Search Google for Current time ",
  contexts: ["selection"]
});


/*
Handle clicking on the menu items
*/
browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case current_time:
      kholgugal(info.selectionText, true);
      break;
  }
});
