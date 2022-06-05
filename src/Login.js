import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Login() {
    
    const quotes = [
        "Walking on water and developing software from a specification are easy if both are frozen", 

        "It always takes longer than you expect, even when you take into account Hofstadter’s Law",
         "Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems",
          "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
           "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
            "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
             "I don’t care if it works on your machine! We are not shipping your machine!",
            "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
            "In theory, theory and practice are the same. In practice, they’re not.",
            "Perl – The only language that looks the same before and after RSA encryption.",
            "I love deadlines. I like the whooshing sound they make as they fly by.",
            "XML is like violence – if it doesn’t solve your problems, you are not using enough of it.",
            "Linux is only free if your time has no value",
            "The best thing about a boolean is even if you are wrong, you are only off by a bit",
            "The question of whether computers can think is like the question of whether submarines can swim",
            "The city’s central computer told you?  R2D2, you know better than to trust a strange computer!",
            "Hardware: The parts of a computer system that can be kicked",
            "19 Jan 2038 at 3:14:07 AM",
            "Microsoft has a new version out, Windows XP, which according to everybody is the most reliable Windows ever.  To me, this is like saying that asparagus is the most articulate vegetable ever.",
            "Most of you are familiar with the virtues of a programmer.  There are three, of course: laziness, impatience, and hubris"
          ];

    const authors = [
          'Edward V Berard',
          "Hofstadter’s Law",
          "Jamie Zawinski",
          "Brian Kernighan",
          "Rick Osborne",
          "Rich Cook",
          "Ovidiu Platon",
          "Bjarne Stroustrup",
          "Yoggi Berra",
          "Keith Bostic",
          "Douglas Adams",
          "Unknown",
          "Jamie Zawinski",
          "Anonymous",
          "Edsger Dijkstra",
          "C3PO",
          "Jeff Pesis",
          "End of the World?",
          "Dave Barry",
          "Larry Wall"
    ]

    console.log(quotes.length);
    console.log(authors.length);

    const random = Math.floor(Math.random() * quotes.length);
    // console.log(random, quotes[random]);

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}> Let's begin the adventure!</Heading>
            <Text as='em' align='center' fontSize={'lg'} color={'gray.500'}>
              "{quotes[random]}" <Text color={'blue.600'}>-{authors[random]}</Text>
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                {/* <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack> */}
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }