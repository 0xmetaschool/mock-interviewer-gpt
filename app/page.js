import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box, VStack, Heading, Text, SimpleGrid, Container, Badge } from '@chakra-ui/react';
import Header from "./dashboard/_components/Header";
import Link from 'next/link';

const Feature = ({ title, text }) => (
  <VStack spacing={3} align="center">
    <Text fontWeight="bold" fontSize="lg" color="black">{title}</Text>
    <Text textAlign="center" color="gray.600">{text}</Text>
  </VStack>
);

const PriceWrapper = ({ children, isRecommended = false }) => (
  <Box shadow={isRecommended ? "2xl" : "lg"} borderWidth="1px" borderRadius="xl" borderColor={isRecommended ? "black" : "gray.200"} p={8} bg="white" position="relative" transform={isRecommended ? "scale(1.05)" : "none"} zIndex={isRecommended ? 1 : 0} height="450px" display="flex" flexDirection="column" justifyContent="space-between">
    {isRecommended && (
      <Badge position="absolute" top="-4" left="50%" transform="translateX(-50%)" px={3} py={1} bg="black" color="white" fontWeight="bold" fontSize="sm" borderRadius="full">
        Recommended
      </Badge>
    )}
    {children}
  </Box>
);

export default function Home() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden">
      <Header />

      {/* Add spacing above the Hero Section */}
      <div className="mt-32"></div>

      {/* Hero Section (Your Personal AI Interview Coach) */}
      <section className="flex flex-1 items-center justify-center z-50 py-16">
        <div className="text-center max-w-screen-lg px-4">
          <h1 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Your Personal AI Interview Coach
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-500 dark:text-gray-400">
            Double your chances of landing that job offer with our AI-powered interview prep
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get Started for Free
            </a>
          </div>
          <div className="mt-8"></div>
        </div>
      </section>

      {/* Features Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="6xl" textAlign="center">
          <VStack spacing={10}>
            <Heading as="h2" size="xl" fontWeight="bold" color="black"> Our Features </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature title="AI-Powered Learning" text="Personalized mock interviews tailored to your style and pace." />
              <Feature title="Interactive Exercises" text="Engage with real-world scenarios to practice your interview skills." />
              <Feature title="Progress Tracking" text="Monitor your improvement with detailed feedback and rating." />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20}>
        <Container maxW="6xl" textAlign="center">
          <VStack spacing={12}>
            <Heading as="h2" size="xl" fontWeight="bold" color="black"> Pricing Plans </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <PriceWrapper>
                <VStack spacing={2} flex={1}>
                  <Text fontWeight="500" fontSize="2xl" color="black">Basic</Text>
                  <Heading as="h3" size="xl" color="black">$0</Heading>
                  <Text fontSize="lg" color="gray.500">per month</Text>
                  <VStack spacing={4} align="start" mt={4}>
                    <Text color="gray.600">1 mock interview</Text>
                    <Text color="gray.600">Basic questions</Text>
                  </VStack>
                </VStack>
              </PriceWrapper>
              <PriceWrapper isRecommended={true}>
                <VStack spacing={2} flex={1}>
                  <Text fontWeight="500" fontSize="2xl" color="black">Pro</Text>
                  <Heading as="h3" size="xl" color="black">$7.99</Heading>
                  <Text fontSize="lg" color="gray.500">per month</Text>
                  <VStack spacing={4} align="start" mt={4}>
                    <Text color="gray.600">3 Allowed attempts</Text>
                    <Text color="gray.600">Advanced interview scenarios</Text>
                    <Text color="gray.600">Progress tracking</Text>
                  </VStack>
                </VStack>
              </PriceWrapper>
              <PriceWrapper>
                <VStack spacing={2} flex={1}>
                  <Text fontWeight="500" fontSize="2xl" color="black">Enterprise</Text>
                  <Heading as="h3" size="xl" color="black">Custom</Heading>
                  <Text fontSize="lg" color="gray.500">per month</Text>
                  <VStack spacing={4} align="start" mt={4}>
                    <Text color="gray.600">Unlimited languages</Text>
                    <Text color="gray.600">Custom interviews</Text>
                    <Text color="gray.600">Dedicated support</Text>
                  </VStack>
                </VStack>
              </PriceWrapper>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Start your journey Section */}
      <Box bg="gray.50" color="black" py={20}>
        <Container maxW="4xl" textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="bold"> Start Your Interview Preparation Journey Today </Heading>
          <Text fontSize="xl" mb={8} color="gray.600"> Join thousands of satisfied learners and unlock your potential with our AI-powered language app. </Text>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Sign In Now
            </a>
          </div>
        </Container>
      </Box>
    </div>
  );
}
