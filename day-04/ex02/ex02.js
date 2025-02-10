/***
 * Bài 2: Phân trang dữ liệu (Pagination)
Tình huống thực tế: Khi hiển thị danh sách bài viết trên một trang web, cần chia nhỏ danh sách thành từng trang.

Yêu cầu:
Viết hàm paginateData(data, page, pageSize) để lấy danh sách phần tử thuộc trang page, mỗi trang chứa pageSize phần tử.

Dữ liệu mẫu:

let posts = [
  "Post 1",
  "Post 2",
  "Post 3",
  "Post 4",
  "Post 5",
  "Post 6",
  "Post 7",
  "Post 8",
  "Post 9",
  "Post 10",
];

console.log(paginateData(posts, 2, 3));
// Kết quả mong muốn: ["Post 4", "Post 5", "Post 6"]
 */

function paginateData(data, page, pageSize) { 
  startIndex = (page - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize) 
}

let posts = [
  "Post 1",
  "Post 2",
  "Post 3",
  "Post 4",
  "Post 5",
  "Post 6",
  "Post 7",
  "Post 8",
  "Post 9",
  "Post 10",
];

console.log(paginateData(posts, 2, 3)); 