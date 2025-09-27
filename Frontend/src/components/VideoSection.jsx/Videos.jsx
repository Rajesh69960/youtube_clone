import React from "react"
import Video from "./Video"

function Videos() {
  const videos = [
    {
      videoId: "video01",
      title: "Learn React in 30 Minutes",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "A quick tutorial to get started with React.",
      channelId: "channel01",
      uploader: "user01",
      views: 15200,
      likes: 1023,
      dislikes: 45,
      uploadDate: "2024-09-20",
      comments: [
        {
          commentId: "comment01",
          userId: "user02",
          text: "Great video! Very helpful.",
          timestamp: "2024-09-21T08:30:00Z",
        },
      ],
    },
    {
      videoId: "video02",
      title: "JavaScript Basics for Beginners",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Learn the fundamentals of JavaScript.",
      channelId: "channel02",
      uploader: "user03",
      views: 25000,
      likes: 2045,
      dislikes: 60,
      uploadDate: "2024-09-18",
      comments: [
        {
          commentId: "comment02",
          userId: "user04",
          text: "Excellent explanation!",
          timestamp: "2024-09-19T10:15:00Z",
        },
      ],
    },
    {
      videoId: "video03",
      title: "CSS Flexbox Tutorial",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Master Flexbox layout with this tutorial.",
      channelId: "channel03",
      uploader: "user05",
      views: 18000,
      likes: 1500,
      dislikes: 30,
      uploadDate: "2024-09-17",
      comments: [
        {
          commentId: "comment03",
          userId: "user06",
          text: "Very clear and easy to follow.",
          timestamp: "2024-09-17T14:45:00Z",
        },
      ],
    },
    {
      videoId: "video04",
      title: "Node.js Crash Course",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Get started with Node.js in one hour.",
      channelId: "channel04",
      uploader: "user07",
      views: 22000,
      likes: 1800,
      dislikes: 40,
      uploadDate: "2024-09-16",
      comments: [
        {
          commentId: "comment04",
          userId: "user08",
          text: "Helped me a lot, thanks!",
          timestamp: "2024-09-16T09:20:00Z",
        },
      ],
    },
    {
      videoId: "video05",
      title: "Python for Data Science",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Introduction to data science with Python.",
      channelId: "channel05",
      uploader: "user09",
      views: 30000,
      likes: 2500,
      dislikes: 80,
      uploadDate: "2024-09-14",
      comments: [
        {
          commentId: "comment05",
          userId: "user10",
          text: "Very informative!",
          timestamp: "2024-09-15T11:50:00Z",
        },
      ],
    },
    {
      videoId: "video06",
      title: "HTML5 New Features",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Explore the new features in HTML5.",
      channelId: "channel06",
      uploader: "user11",
      views: 17000,
      likes: 1200,
      dislikes: 25,
      uploadDate: "2024-09-13",
      comments: [
        {
          commentId: "comment06",
          userId: "user12",
          text: "Thanks for the update!",
          timestamp: "2024-09-14T07:40:00Z",
        },
      ],
    },
    {
      videoId: "video07",
      title: "Angular Tutorial for Beginners",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1549924620-cf4d0f7a4f6b?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Learn Angular from scratch.",
      channelId: "channel07",
      uploader: "user13",
      views: 14000,
      likes: 950,
      dislikes: 20,
      uploadDate: "2024-09-12",
      comments: [
        {
          commentId: "comment07",
          userId: "user14",
          text: "Well explained!",
          timestamp: "2024-09-12T16:30:00Z",
        },
      ],
    },
    {
      videoId: "video08",
      title: "Vue.js Fundamentals",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Build reactive interfaces with Vue.js.",
      channelId: "channel08",
      uploader: "user15",
      views: 12500,
      likes: 900,
      dislikes: 15,
      uploadDate: "2024-09-11",
      comments: [
        {
          commentId: "comment08",
          userId: "user16",
          text: "Very helpful for beginners.",
          timestamp: "2024-09-11T13:00:00Z",
        },
      ],
    },
    {
      videoId: "video09",
      title: "Django Web Framework",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1549924620-cf4d0f7a4f6b?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Build backend with Django.",
      channelId: "channel09",
      uploader: "user17",
      views: 16000,
      likes: 1100,
      dislikes: 35,
      uploadDate: "2024-09-10",
      comments: [
        {
          commentId: "comment09",
          userId: "user18",
          text: "Great for backend development.",
          timestamp: "2024-09-10T10:25:00Z",
        },
      ],
    },
    {
      videoId: "video10",
      title: "Flutter App Development",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Create beautiful mobile apps with Flutter.",
      channelId: "channel10",
      uploader: "user19",
      views: 20000,
      likes: 1600,
      dislikes: 50,
      uploadDate: "2024-09-09",
      comments: [
        {
          commentId: "comment10",
          userId: "user20",
          text: "Amazing tutorial!",
          timestamp: "2024-09-09T14:10:00Z",
        },
      ],
    },
    {
      videoId: "video11",
      title: "Machine Learning Basics",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Introduction to Machine Learning concepts.",
      channelId: "channel11",
      uploader: "user21",
      views: 19000,
      likes: 1400,
      dislikes: 70,
      uploadDate: "2024-09-08",
      comments: [
        {
          commentId: "comment11",
          userId: "user22",
          text: "Very insightful.",
          timestamp: "2024-09-08T09:50:00Z",
        },
      ],
    },
    {
      videoId: "video12",
      title: "Building REST APIs with Express",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1549924620-cf4d0f7a4f6b?ixlib=rb-4.0.0&auto=format&fit=crop&w=320&q=80",
      description: "Create RESTful APIs using Express.js.",
      channelId: "channel12",
      uploader: "user23",
      views: 13000,
      likes: 850,
      dislikes: 22,
      uploadDate: "2024-09-07",
      comments: [
        {
          commentId: "comment12",
          userId: "user24",
          text: "Very practical!",
          timestamp: "2024-09-07T12:40:00Z",
        },
      ],
    },
  ]
  return (
    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 mt-32 px-8">
      {videos.map((video) => {
        return <Video key={video.videoId} video={video} />
      })}
    </div>
  )
}

export default Videos
