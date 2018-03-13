import React, {Component} from 'react'
import styled from 'styled-components'
import Bookmark from './icons/bookmark'
import Heart from './icons/heart'

const moonrite = {
  artist: 'Moonrite',
  coverUri: 'https://i.scdn.co/image/183b359cc1b870bf5e32a3ac54d41cf6e24db423',
  title: 'S/T',
}

const album = {
  artist: 'Baby Woodrose',
  title: 'Love Comes Down',
  coverUri: '/images/albums/album-02.jpg',
}

const badAfro = {
  name: 'Bad Afro Records',
  type: 'Record Label',
  avatar: '/images/avatars/bad-afro.jpg',
}

class App extends Component {
  render() {
    return (
      <Main>
        <Cards>
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage src={badAfro.avatar} />
              </Avatar>
              <Details>
                <Title href="#">{badAfro.name}</Title>
                <Subtitle>{badAfro.type}</Subtitle>
              </Details>
            </CardHeader>
            <CardImage src={album.coverUri} />
            <CardFooter>
            <AlbumCredits>
              <Header>{album.artist}</Header>
              <Subheader>{album.title}</Subheader>
            </AlbumCredits>
            <IconContainer>
              <Bookmark />
          </IconContainer>
          </CardFooter>
          </Card>
        </Cards>
      </Main>
    )
  }
}

export default App

const Main = styled.main``

const Card = styled.article`
  padding: 0;
  width: 100%;
`

const Cards = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  width: 100%;
`

const CardHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 60px;
  padding: 16px;
`

const Details = styled.div`
  margin-left: 12px;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  justify-content: center;
`

const Avatar = styled.a`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
`

const Title = styled.a`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
  margin-left: -5px;
`

const Subtitle = styled.p`
  color: var(--dark-gray);
  margin-bottom: 0;
`

const CardImage = styled.img`
  margin: 0;
  padding: 0;
`

const CardFooter = styled.div`
  flex-direction: row;
  justify-content: space-between;
`

const AlbumCredits = styled.div`
  justify-content: flex-end;
  padding: 16px;
`

const Header = styled.h2`
  margin-bottom: 0.2rem;
`

const Subheader = styled.h3`
  color: var(--dark-gray);
  margin-bottom: 0;
`

const IconContainer = styled.div`
  padding-right: 8px;
  padding-top: 16px;
`
