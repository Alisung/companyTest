const posts = [
    {
      id: 1,
      title: "React 공부 방법",
      content: "React를 처음 배우는 방법을 공유합니다.",
      author: "김철수",
      category: "프로그래밍",
      createdAt: "2026-06-01T09:30:00",
      updatedAt: "2026-06-01T10:20:00",
      views: 321,
      likes: 25,
      commentCount: 8
    },
    {
      id: 2,
      title: "버거킹 보드 후기",
      content: "첫 출근 후기입니다.",
      author: "이영희",
      category: "아르바이트",
      createdAt: "2026-05-31T15:10:00",
      updatedAt: "2026-05-31T15:10:00",
      views: 517,
      likes: 42,
      commentCount: 17
    },
    {
      id: 3,
      title: "MongoDB 사용법",
      content: "MongoDB CRUD 예제",
      author: "박민수",
      category: "프로그래밍",
      createdAt: "2026-05-30T11:20:00",
      updatedAt: "2026-05-30T13:45:00",
      views: 148,
      likes: 11,
      commentCount: 4
    },
    {
      id: 4,
      title: "신입 개발자 취업 준비",
      content: "포트폴리오 준비 팁",
      author: "최지훈",
      category: "취업",
      createdAt: "2026-05-29T20:00:00",
      updatedAt: "2026-05-29T20:30:00",
      views: 904,
      likes: 77,
      commentCount: 31
    },
    {
      id: 5,
      title: "JavaScript 배열 정리",
      content: "배열 메서드 모음",
      author: "김철수",
      category: "프로그래밍",
      createdAt: "2026-05-28T09:10:00",
      updatedAt: "2026-05-28T12:00:00",
      views: 257,
      likes: 18,
      commentCount: 6
    },
    {
      id: 6,
      title: "치과기공소 창업 비용",
      content: "창업 비용 조사 결과",
      author: "정수진",
      category: "창업",
      createdAt: "2026-05-27T14:50:00",
      updatedAt: "2026-05-27T18:30:00",
      views: 635,
      likes: 29,
      commentCount: 13
    }
  ];

const sortPosts = (items, criterion) => {
  const sorted = [...items];

  if (criterion === "createdAt") {
    return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  if (criterion === "views") {
    return sorted.sort((a, b) => b.views - a.views);
  }

  if (criterion === "likes") {
    return sorted.sort((a, b) => b.likes - a.likes);
  }

  if (criterion === "title") {
    return sorted.sort((a, b) => a.title.localeCompare(b.title, "ko-KR"));
  }

  return sorted;
};

const renderPosts = (items) => {
  const postList = document.getElementById("post-list");

  postList.innerHTML = items
    .map(
      (post) =>
        `<li><strong>${post.title}</strong> | 작성일: ${post.createdAt} | 조회수: ${post.views} | 좋아요: ${post.likes}</li>`
    )
    .join("");
};

document.addEventListener("DOMContentLoaded", () => {
  const sortSelect = document.getElementById("sort-select");

  renderPosts(sortPosts(posts, sortSelect.value));

  sortSelect.addEventListener("change", (event) => {
    const sortedPosts = sortPosts(posts, event.target.value);
    renderPosts(sortedPosts);
  });
});