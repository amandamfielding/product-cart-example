import $ from 'jquery';

export const fetchProducts = (success) => {
  $.ajax({
    dataType: 'json',
    method: 'GET',
    url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js',
    // data: {search_term: 'products'},
    success
  });
};

// export const fetchProduct = (id, success) => {
//   $.ajax({
//     method: 'GET',
//     url: `api/places/${id}`,
//     success
//   });
// };
