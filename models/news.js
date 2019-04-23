// 要闻
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const NewsSchema = new Schema({
  newsId: String,
  todayNews: [
    {
      title: String,
      detail: {
        newsSource: String,
        pubtime: String,
        reply: String
      },
      newPic: Array,
      newsType: String
    }
  ],
  sports: [
    {
      title: String,
      newPic: Array,
      detail: { 
        newsTag: String,
        newsSource: String,
        pubtime: String,
        reply: String
      },
      toApp: String,
      newsType: String
    }
  ],
  entertainment: [
    {
      title: String,
      newsPic: Array,
      detail: {
        newsTag: String,
        newsSource: String,
        pubtime: String,
        reply: String
      },
      toApp: String,
      newsType: String
    }
  ],
  military: [
    {
      title: String,
      newsPic: Array,
      detail: {
        newsTag: String,
        newsSource: String,
        pubtime: String,
        reply: String
      },
      toApp: String,
      newsType: String      
    }
  ],
  finance: [
    {
      title: String,
      newsPic: Array,
      detail: {
        newsTag: String,
        newsSource: String,
        pubtime: String,
        reply: String
      },
      toApp: String,
      newsType: String       
    }
  ],
  local: [
    {
      title: String,
      newsPic: Array,
      detail: {
        newsTag: String,
        newsSource: String,
        pubtime: String,
        reply: String
      },
      toApp: String,
      newsType: String       
    }
  ],
  netease: [
    {
      title: String,
      newsPic: Array,
      detail: {
        newsTag: String,
        newsSource: String,
        pubtime: String,
        reply: String
      },
      toApp: String,
      newsType: String       
    }
  ],
  car: [
    {
      title: String,
      newsPic: Array,
      detail: {
        newsTag: String,
        newsSource: String,
        pubtime: String,
        reply: String
      },
      toApp: String,
      newsType: String       
    }
  ],
  tech: [
    {
      title: String,
      newsPic: Array,
      detail: {
        newsTag: String,
        newsSource: String,
        pubtime: String,
        reply: String
      },
      toApp: String,
      newsType: String       
    }
  ]
}, { collection: 'news', versionKey: false })

module.exports = mongoose.model('news', NewsSchema)
