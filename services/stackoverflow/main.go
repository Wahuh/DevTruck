package main

import (
	"encoding/xml"
	"io/ioutil"
	"net/http"
)

// Rss data structure for StackOverflow feed
type Rss struct {
	XMLName xml.Name `xml:"rss"`
	Text    string   `xml:",chardata"`
	A10     string   `xml:"a10,attr"`
	Version string   `xml:"version,attr"`
	Channel struct {
		Text        string `xml:",chardata"`
		Os          string `xml:"os,attr"`
		Title       string `xml:"title"`
		Link        string `xml:"link"`
		Description string `xml:"description"`
		Image       struct {
			Text  string `xml:",chardata"`
			URL   string `xml:"url"`
			Title string `xml:"title"`
			Link  string `xml:"link"`
		} `xml:"image"`
		TotalResults string `xml:"totalResults"`
		Item         []struct {
			Text string `xml:",chardata"`
			Guid struct {
				Text        string `xml:",chardata"`
				IsPermaLink string `xml:"isPermaLink,attr"`
			} `xml:"guid"`
			Link   string `xml:"link"`
			Author struct {
				Text string `xml:",chardata"`
				Name string `xml:"name"`
			} `xml:"author"`
			Category    []string `xml:"category"`
			Title       string   `xml:"title"`
			Description string   `xml:"description"`
			PubDate     string   `xml:"pubDate"`
			Updated     string   `xml:"updated"`
			Location    struct {
				Text  string `xml:",chardata"`
				Xmlns string `xml:"xmlns,attr"`
			} `xml:"location"`
		} `xml:"item"`
	} `xml:"channel"`
} 

// Job data structure for DevTruck's api
type Job struct {
	sourceID string
	sourceLink string
	company string
	technologies []string
	title string
	description string
	publishDate string
	updatedAt string
	location string
	imageURL string
}

func getStackOverflowJobsRssFeed() Rss {
	resp, err := http.Get("https://stackoverflow.com/jobs/feed?location=United+Kingdom")
	if err != nil {
	
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
	
	}

	var rss Rss
	xml.Unmarshal(body, &rss)
	return rss
}

func main() {
	rss := getStackOverflowJobsRssFeed()
	rss.Channel.Item
}