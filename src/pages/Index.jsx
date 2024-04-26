import { Box, Button, VStack, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { FaPlay, FaPause, FaUpload } from 'react-icons/fa';
import { useState, useRef } from 'react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <VStack spacing={8} p={5} align="center">
      <Text fontSize="4xl" fontWeight="bold">Welcome to GPT Engineer Music Player</Text>
      <Image src="/images/music-banner.jpg" alt="Music Banner" borderRadius="lg" />
      <audio ref={audioRef} src="/music/sample-track.mp3" preload="auto"></audio>
      <Button leftIcon={isPlaying ? <FaPause /> : <FaPlay />} colorScheme="purple" onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
      <Button leftIcon={<FaUpload />} colorScheme="teal">Upload New Track</Button>
    </VStack>
  );
};

export default Index;