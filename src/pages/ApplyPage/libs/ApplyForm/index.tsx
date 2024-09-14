import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type JobApply = {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: FileList;
  coverLetter: string;
};

export function ApplyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JobApply>();
  const toast = useToast();

  const onSubmit = (data: JobApply) => {
    console.log(data);

    toast({
      title: 'Application submitted.',
      description: 'We have received your application!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    reset();
  };
  return (
    <Box p={6}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired mb={4}>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your full name"
            {...register('name', { required: 'Full name is required' })}
          />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
          />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: 'Invalid phone number',
              },
            })}
          />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Upload Resume</FormLabel>
          <Input
            type="file"
            border="none"
            accept=".pdf,.doc,.docx"
            {...register('resume', { required: 'Resume is required' })}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Cover Letter</FormLabel>
          <Textarea placeholder="Write your cover letter" {...register('coverLetter')} />
        </FormControl>

        <Button type="submit" colorScheme="blue" width="100%">
          Submit Application
        </Button>
      </form>
    </Box>
  );
}
