import Artists from "../pages/artists"

const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers[
			'Authorization'
		] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
	}

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export function getStaticCategories() {
	const categories = [
		{
			node: {
				name: "Cherish",
				slug: "cherish",
				description: "The stories we are able to tell, and the visuals we are embodied to create."
			}
		},
		{
			node: {
				name: "Envision",
				slug: "envision",
				description: "A better future through the creative vision we have the power to tell."
			}
		},
		{
			node: {
				name: "Reflect",
				slug: "reflect",
				description: "On our triumphs, our failures and our success as humans and creatives."
			}
			
		},
		{
			node: {
				name: "Reform",
				slug: "reform",
				description: "Not only the way we design, but the value behind our message."
			}
		}
	];
	return categories;
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
	const data = await fetchAPI(
		`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
		{
			variables: { id, idType },
		}
	)
	return data.post
}

export async function getAllPostsWithSlug() {
	const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
	return data?.posts
}

export async function getArtists() {
	const data = await fetchAPI(`
   query MyQuery {
  artists(first: 100){
    edges {
      node {
        id
        title
        slug
        featuredImage {
          node {
            altText
            mediaDetails {
              width
              height
            }
            sourceUrl(size: MEDIUM)
          }
        }
        years {
          edges {
            node {
              id
              name
            }
          }
        }
		roles {
          edges {
            node {
              id
              name
            }
          }
        }
		 relatedPost {
      relatedProjectArtist {
        ... on Post {
          id
          title
          slug
        }
      }
    }
      }
    }
  }
}

  `)
	return data?.artists.edges
}

export async function getAllArtistSlugs() {
	const data = await fetchAPI(`
   query MyQuery {
  artists(first: 1000) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
  `)
	//return data.artists.edges
	const artistSlugs = data.artists.edges.map((artist) => {
		return {
			params: {
				id: artist.node.slug
			}
		}
	});
	return artistSlugs;
}

export async function getAllPostsForHome(preview) {
	const data = await fetchAPI(`query AllPosts {
		posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        id
        content
        title
        excerpt
        slug
        categories {
          edges {
            node {
              name
              slug
              description
            }
          }
        }
        featuredImage {
          node {
            altText
            srcSet(size: LARGE)
            sourceUrl(size: LARGE)
            mediaDetails {
              height
              width
            }
          }
        }
        relatedArtist {
          relatedProjectArtist {
           ... on Artist {
              id
              title
              slug
              featuredImage {
                node {
                  altText
                  id
                  sourceUrl(size: LARGE)
                }
              }
            }
          }
        }
        projectInformation {
          photoGallery {
            slide {
				id
              altText
              sourceUrl
              srcSet(size: LARGE)
              mediaDetails {
                width
                height
              }
            }
          }
          video
        }
      }
    }
  }
	}`,
		{
			variables: {
				onlyEnabled: !preview,
				preview,
			},
		}
	)

	return data?.posts
}

export async function getCategoriesWithPosts() {
	const data = await fetchAPI(`
query GetCategoriesWithPosts {
  categories(where: {hideEmpty: true}) {
    edges {
      node {
        id
        slug
        name
        description
        posts(first: 100) {
          edges {
            node {
              id
              title
              slug
              excerpt
			  content
			  featuredImage {
				node {
					altText
					sourceUrl(size: LARGE)
					mediaDetails {
					width
					height
					}
				}
				}
              projectInformation {
                video
                photoGallery {
                  slide {
                    altText
                    caption
                    sourceUrl(size: LARGE)
                    mediaDetails {
                      width
                      height
                    }
                  }
                }
              }
              relatedArtist {
                relatedProjectArtist {
                  ... on Artist {
                    id
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

	`)
	return data?.categories.edges
}
export async function getCategories() {
	const data = await fetchAPI(`
	query GetCategoriesWithPosts {
  categories(where: {hideEmpty: true}) {
    edges {
      node {
        id
        slug
        name
        description
      }
    }
  }
}
	`)
	return data?.categories.edges
}

export async function getPostAndMorePosts(slug, preview, previewData) {
	const postPreview = preview && previewData?.post
	// The slug may be the id of an unpublished post
	const isId = Number.isInteger(Number(slug))
	const isSamePost = isId
		? Number(slug) === postPreview.id
		: slug === postPreview.slug
	const isDraft = isSamePost && postPreview?.status === 'draft'
	const isRevision = isSamePost && postPreview?.status === 'publish'
	const data = await fetchAPI(
		`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
		// Only some of the fields of a revision are considered as there are some inconsistencies
		isRevision
			? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
			: ''
		}
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
		{
			variables: {
				id: isDraft ? postPreview.id : slug,
				idType: isDraft ? 'DATABASE_ID' : 'SLUG',
			},
		}
	)

	// Draft posts may not have an slug
	if (isDraft) data.post.slug = postPreview.id
	// Apply a revision (changes in a published post)
	if (isRevision && data.post.revisions) {
		const revision = data.post.revisions.edges[0]?.node

		if (revision) Object.assign(data.post, revision)
		delete data.post.revisions
	}

	// Filter out the main post
	data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
	// If there are still 3 posts, remove the last one
	if (data.posts.edges.length > 2) data.posts.edges.pop()

	return data
}

export async function getSingleArtistBySlug($id) {
	const data = await fetchAPI(`
query MyQuery($id: ID!) {
  artist(id: $id, idType: SLUG) {
    id
    title
    slug
    featuredImage {
      node {
        altText
        sourceUrl(size: MEDIUM)
        mediaDetails {
          width
          height
        }
      }
    }
    artistInformation {
      portfolioUrl
      firstName
      lastName
    }
    years {
      edges {
        node {
          name
          slug
        }
      }
    }
    roles {
      edges {
        node {
          slug
          name
        }
      }
    }
    relatedPost {
      relatedProjectArtist {
        ... on Post {
          id
          title
          slug
          excerpt
		  featuredImage {
			node {
				altText
				sourceUrl(size: LARGE)
				mediaDetails {
				width
				height
				}
			}
    		}
          projectInformation {
            video
            photoGallery {
              slide {
                altText
                caption
                sourceUrl(size: LARGE)
				mediaDetails {
					width
					height
				}
              }
            }
          }
        }
      }
    }
  }
}
	`, {
		variables: {
			"id": $id
		},
	}
	)

	return data?.artist
}

export async function getAboutPage($id) {
	const data = await fetchAPI(`
query MyQuery($id: ID!) {
  page(id: $id, idType: URI) {
    id
    title
    content
  }
}
	  `, {
		variables: {
			"id": $id
		},
	}
	)

	return data?.page
}
