"use client";
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const features = [
    {
        title: "AI-Powered Automation",
        description: "Streamline sales tasks such as composing emails, transcribing calls, and setting follow-up reminders through cutting-edge AI technology."
    },
    {
        title: "Efficient Dialling Systems",
        description: "Optimize your calling productivity with our Power Dialer. Our Predictive Dialer enhances your calling approach by prioritizing numbers based on predictive algorithms."
    },
    {
        title: "Call Transcription and Recording",
        description: "Automatically transcribe and record every call to capture insights and ensure compliance with regulations. Access recordings directly from the CRM for reference."
    },
    {
        title: "Enhanced Integration Capabilities",
        description: "Connect with platforms such as Gmail, Facebook, Instagram, Google Ads, and payment gateways like Stripe and Razorpay for efficient tracking of payments and lead management."
    },
    {
        title: "Personalized Email Templates",
        description: "Craft customized email templates and automate email campaigns to engage leads and enhance conversion rates."
    },
    {
        title: "Intuitive User Interface",
        description: "Our user-friendly UI/UX design ensures simplicity in navigation, allowing teams to quickly adapt and utilize the CRM efficiently."
    },
    {
        title: "Immediate Data Access",
        description: "Retrieve your CRM data anytime, anywhere, fostering real-time collaboration with your team."
    },
    {
        title: "In-Depth Analytics",
        description: "Obtain insights on sales performance, customer interactions, and ROI for making informed business decisions."
    },
    {
        title: "Customer Service",
        description: "Our dedicated support team is here to help you make the most of Blem CRM."
    },
];

const reasons = [
    "Innovation at Its Core",
    "Scalable Solutions",
    "Cost Effective",
    "Data Protection"
];

const AboutUs = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container className="mx-auto py-8 px-4">
                <Typography variant="h2" className="text-center mb-8">
                    About Us
                </Typography>
                <Typography variant="h4" className="text-center mb-8">
                    Welcome to Blem CRM
                </Typography>
                <Typography variant="h6" className="text-center mb-12">
                    Your go-to solution for improving sales effectiveness and customer interactions.
                </Typography>
                <Typography variant="h6" className="mb-4">
                    Our Purpose
                </Typography>
                <Typography paragraph>
                    At Blem CRM, our goal is to equip businesses with tools that simplify sales processes, enhance efficiency, and stimulate growth. We recognize the obstacles faced by SMEs/SMBs and are dedicated to providing user-friendly solutions that yield tangible outcomes.
                </Typography>
                <Typography variant="h6" className="mb-4">
                    Main Features and Advantages
                </Typography>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="h-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <CardContent>
                                        <Typography variant="h6" className="mb-4">
                                            {feature.title}
                                        </Typography>
                                        <Typography>
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h6" className="mt-12 mb-4">
                    Reasons to Choose Blem CRM
                </Typography>
                <List>
                    {reasons.map((reason, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <CheckCircle color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={reason} />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h6" className="mt-12 text-center">
                    Join Our Community of Businesses
                </Typography>
            </Container>
        </motion.div>
    );
}

export default AboutUs;
