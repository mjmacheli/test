import React from 'react'
import ReactHowler from 'react-howler'
import { Container, Header, Divider, Card, Icon, Segment } from 'semantic-ui-react'
const playlist = [
    { name: 'newsletter   (31 May - 4 June) ', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3' },
    { name: 'newsletter  (7 June - 11 june)', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
    { name: 'newsletter  (14 June - 18 June)', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
    { name: 'newsletter  (21 June - 25 June)', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
    { name: 'newsletter  (28 june - 2 July)', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/yonghengdegangwan.mp3' },
  ]

  const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ')

const Screen = () => {
    return(
        <Container text>
        <Header as='h1'>Newsletter</Header>
        <Segment raised>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
          viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        </Segment>

        <ReactHowler
        src='/public/zhiya.mp3'
        playing={false}
      />
        
        <p style={{textAlign: 'start'}}> <Icon name='calendar alternate outline' />{' '}November</p>
        
    <Divider />
        {
            playlist.map(p => 
                <Card fluid>
                    <Card.Content header={p.name} />
                    <audio controls style={{width: '100%', borderRadius: 'unset'}}>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                    </audio>
                    <Card.Content extra>
                    <Icon name='arrow alternate circle down' />12 MB
                    </Card.Content>
                </Card>
            )
        }

     
        <p style={{textAlign: 'start'}}> <Icon name='calendar alternate outline' />{' '}November</p>
        
    <Divider />
        {
            playlist.map(p => 
                <Card fluid>
                    <Card.Content header={p.name} />
                    <Card.Content description={description} />
                    <Card.Content extra>
                    <Icon name='calendar alternate outline' />31 May - 4 June
                    </Card.Content>
                </Card>
            )
        }
       
        </Container>
    )
}

export default Screen