module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  format_category_for_creating_list: (category) => {
    switch (category) {
      case "category1":
        return "TV &amp; Home Theater";
      case "category2":
        return "Computers &amp; Tablets";
      case "category3":
        return "Camera, Photo &amp; Video";
      case "category4":
        return "Cell Phones &amp; Accessories";
      case "category5":
        return "Headphones &amp; Audio";
      case "category6":
        return "Car Electronics";
      case "category7":
        return "Health &amp; Wellness";
      case "category8":
        return "Wearable Technology";
    }
  },
  format_category: (category) => {
    return category.replace('And', '&amp;');
  },
  format_category_url: (url) => {
    return url.replace('%20', ' ').replace('&', '&amp;');
  },
  sumArray: (array) => {
    let result = array.reduce((a, b) => {
      return a + b;
    }, 10);
    return result;
  },
  render_category_image: (category) => {
    switch (category) {
      case "TV &amp; Home Theater":
        return "tv.png";
      case "Computers &amp; Tablets":
        return "computers.png";
      case "Camera, Photo &amp; Video":
        return "cameras.png";
      case "Cell Phones &amp; Accessories":
        return "phones.png";
      case "Headphones &amp; Audio":
        return "headphones.png";
      case "Car Electronics":
        return "cars.png";
      case "Health &amp; Wellness":
        return "health.png";
      case "Wearable Technology":
        return "wearable.png";
    }
  },
  format_search_term: (search_term) => {
    return search_term.toLowerCase();
  }
};
