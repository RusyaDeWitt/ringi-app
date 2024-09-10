import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { Card } from '../Card';

export function Categories() {
  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }} gap="30px">
      <GridItem>
        <Card
          title="Construction"
          img="https://elitebuilderslondon.co.uk/wp-content/uploads/2020/11/builder-img-1-1.jpg"
        />
      </GridItem>
      <GridItem>
        <Card
          title="IT & Software Development"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBeEH5quZFFuCxirTXWR7Bt4dDojARHFd9A&s"
        />
      </GridItem>
      <GridItem>
        <Card
          title="Medicine"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZseLhmxAAYsZq6NKkoLYFmIt0VeEgKKPPMQ&s"
        />
      </GridItem>
      <GridItem>
        <Card
          title="Restaurant Business"
          img="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
        />
      </GridItem>
      <GridItem>
        <Card
          title="Accountant"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHa2L3YThRkdRJTD3RJRirc9AcMzaiKSwyg&s"
        />
      </GridItem>
    </Grid>
  );
}
