"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InstagramIcon = ({ className = "w-5 h-5 stroke-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5 stroke-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const BehanceIcon = ({ className = "w-5 h-5 stroke-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h4.5a2.5 2.5 0 0 1 0 5H3V8zm0 5h5a2.5 2.5 0 0 1 0 5H3v-5z" />
    <path d="M14 13h7a3.5 3.5 0 1 0-7 0z" />
    <path d="M15 9h5" />
  </svg>
);

// Paths extracted from assets/logo solo testo beige.svg
const LOGO_PATHS = [
  "M42.8,39.3c.3.9,0,1.8-1.1,2.6s-2.8,1.4-5,1.7c-4,.5-8.1,1.1-12.2,1.7-4.2.6-8.4,1.2-12.8,1.8-.2,4.5-.2,9,0,13.6,2,0,4.5-.2,7.4-.6s5.8-.9,8.8-1.5,5.9-1.3,8.7-1.9,5.2-1.2,7.1-1.7c1-.3,2-.5,3.1-.6s2-.1,2.9,0,1.5.5,2.1,1c.5.5.8,1.3.8,2.3s-.3.7-.9,1.2-1.4,1.1-2.3,1.7c-.9.6-1.9,1.1-2.9,1.6s-1.9.9-2.7,1.1c-5.5,1.8-10.9,3.3-16.2,4.6s-10.5,2-15.6,2.1c-2.9,0-5.1-.7-6.7-2.3-1.5-1.6-2.3-4-2.4-7.1-.2-4.3-.2-8.7,0-13.2-1.5-.9-2.3-2.1-2.3-3.7.2-1.7,1-2.8,2.4-3.5.2-2.6.3-5.2.4-7.8,0-2.6.2-5.2.4-7.8-1-.2-1.8-.7-2.6-1.5C.4,22.1,0,21.2,0,20.2s.2-1.5.5-2.2c.4-.7,1-1.2,2-1.5,1.6-.4,3.5-.8,5.8-1.2,2.3-.4,4.7-.8,7.1-1.2,2.4-.4,4.8-.7,7.1-.9,2.3-.3,4.2-.4,5.8-.5,1.9-.2,3.7,0,5.4.5s3.3,1.5,4.8,3.1c.3,1.2.1,2.2-.7,2.8s-1.9,1-3.3,1.2c-1.3.2-2.9.4-4.8.6s-3.8.5-5.8.7c-2,.3-4,.5-6,.7s-3.9.5-5.6.7v1.2c-.2,2.3-.3,4.6-.4,6.9,0,2.3-.2,4.6-.3,6.9,3.7-.6,7.5-1.2,11.4-1.7s7-.8,9.3-1c1.9-.2,3.7,0,5.5.7,1.8.6,3.4,1.7,4.8,3.2h.2q0,0,0,.1Z",
  "M84,15.6c-4.3,3.7-11.3-5.9-17.3-4.9-4.8-.2-2.2,5.1-.8,10,4.4,8.8,17.3,12.9,24.8,19,17.2,9.5,14.6,33.4-5.3,36.7-8,1.8-22-1.7-21.8-11.6,5.7-6.9,14.3,10.8,27.3-.2,12.9-19.6-25.9-23.8-31.7-38.5-7-15.3,3.9-28.5,17.1-20.8,3.7,2.3,10.8,5.4,7.7,10.3h0Z",
  "M133.5,72.5c0,1-.4,1.9-.9,2.7s-1.2,1.2-2.2,1.1c-1.5,0-2.8-.7-3.9-1.7-1.1-1.1-1.7-2-1.7-2.7,0-7.7-.2-15.6-.7-23.6-.6-8-1.5-16-2.7-24,0-.4,0-.8.3-1.2.2-.4.4-.8.7-1.3.3-.5.7-1,1.3-1.4.6-.3,1.3-.2,2.1,0s1.5.9,2.2,1.6,1.3,1.5,1.9,2.4c.5.9.9,1.7,1.2,2.5.3,1.8.5,3.7.8,5.9s.5,4.4.7,6.6c2.1-1.1,4.2-2.4,6.1-3.9,1.9-1.4,3.7-3,5.1-4.6,1.5-1.7,2.6-3.4,3.4-5.2.8-1.8,1.1-3.7.8-5.6-.2-1.5-.8-2.9-2-4.1-1.1-1.2-2.9-2.2-5.3-2.8-5.5-1.2-10.4-1.3-14.8-.2-4.4,1.1-8.5,3-12.5,5.5-1.2.9-2.2,1.4-3.2,1.6s-1.8,0-2.5,0c-.7-.3-1.2-.7-1.6-1.2s-.5-1.1-.5-1.6c.2-2,1.2-3.9,3-5.5s3.8-3,5.8-4.2c2.7-1.3,5.9-2.4,9.8-3.3,3.9-.9,7.8-1.2,11.8-1,3.9.2,7.6,1.2,11.1,2.9s6.1,4.4,8,8.1c1.7,4.4,2.1,8.4,1.1,12s-2.6,6.8-5,9.7c-2.4,2.9-5.2,5.6-8.5,8s-6.4,4.7-9.3,6.7c.2,3.9.3,7.7.3,11.4v10.4h-.2,0Z",
  "M212.4,44.2c-.5,2.5-1.5,4.9-2.9,7.1-1.4,2.3-2.9,4.4-4.7,6.3-1.8,2-3.7,3.6-5.8,5-2.1,1.4-4.2,2.5-6.3,3.3-3.9,1.4-7.8,1.9-11.6,1.4-3.9-.5-7.3-2.2-10.3-5.2-2-2.5-3.5-5.3-4.3-8.4-.8-3.1-1.2-6.3-1.2-9.5s.5-6.4,1.3-9.4,1.9-5.7,3.3-8.1c1.6-2.8,3.5-5.2,5.7-7s4.7-3,7.3-3.3c.7-.2,1.3,0,1.7.5s.7,1.1.7,1.9c.9-.9,2.3-1.5,4.1-2,1.9-.4,3.9-.5,6.2,0,4.3.5,7.6,1.8,10.1,3.9,2.5,2,4.3,4.4,5.5,7.1,1.2,2.7,1.8,5.5,1.9,8.5.1,3-.2,5.6-.7,8h0ZM183.4,25.8c-1.8.8-3.3,2-4.5,3.5s-2.2,3.3-2.9,5.2c-.8,2-1.2,4.1-1.5,6.3s-.2,4.5,0,6.6c.3,3.1,1.2,5.6,2.8,7.6s4.1,3,7.4,3,3.9-.4,5.8-1.1c1.9-.8,3.7-1.8,5.2-3,1.6-1.2,3.1-2.7,4.4-4.5,1.3-1.7,2.4-3.5,3.2-5.4.4-1,.8-2.2,1.1-3.7.3-1.5.4-3,.3-4.5,0-1.5-.4-3-1.1-4.5-.6-1.4-1.6-2.6-2.9-3.6-1.9-1.3-4.1-2.1-6.6-2.4-2.6-.3-5.3.3-8.1,1.7-.5.4-1.1.4-1.8.2-.7-.2-.9-.8-.7-1.7h0v.3q-.1,0,0,0Z",
  "M258.8,15.6c-4.3,3.7-11.3-5.9-17.3-4.9-4.9-.2-11.6,5.1-10.2,10,4.4,8.8,17.3,12.9,24.8,19,17.2,9.5,14.6,33.4-5.3,36.7-8,1.8-23.2-15.1-23-25,5.7-6.9,15.5,24.1,28.5,13.2,12.9-19.6-25.9-23.8-31.7-38.5-7-15.3,13.3-28.5,26.5-20.8,3.7,2.3,10.8,5.4,7.7,10.3h0Z",
  "M292.3,60.9c0,.4,0,.9,0,1.5s0,1.3-.4,2-.6,1.2-1.1,1.7-1.2.7-2.1.7c-2-1.2-3.6-2.9-4.9-4.9-.7-2.7-1.4-5.7-1.9-9.2s-1-7.1-1.4-10.8c-.4-3.7-.6-7.6-.7-11.5s-.2-7.7,0-11.3c0-.6,0-1.4.2-2.4s.4-1.9.7-2.9.8-1.7,1.3-2.4,1.3-1,2.3-1,2.1.4,2.8,1.1,1.1,1.9,1.1,3.5v11.4c0,4,.4,8.1.7,12.2.4,4.1.8,8,1.4,11.9.6,3.9,1.2,7.3,1.9,10.4h0Z",
  "M359.6,19.3c-9.1-.4-17.9.3-26.3,2.1-8.4,1.9-16.8,4.4-25,7.6-2.1.8-3.8.7-4.9-.3-1.1-1-1.7-2-1.7-2.9.6-1.7,1.7-3.1,3.3-4.1,18.2-8.9,36.4-12.1,54.5-9.8.9.3,1.6.9,2.2,1.9.6,1,.8,1.9.6,2.6-.2.9-.5,1.6-.8,2.2-.4.6-1,.8-2,.7h.1ZM340.7,65.7c0,1-.3,1.8-1,2.6s-1.5,1.2-2.5,1.4c-1.8.3-2.9,0-3.5-.9-.5-.9-.8-1.9-.9-3.1,0-6.2-.2-12.4-.3-18.5,0-6.2-.4-12.4-.9-18.5,0-.4,0-.8,0-1.3v-1.5c0-.5.3-.9.6-1.3s.8-.6,1.5-.8c2-.4,3.5,0,4.4,1s1.3,2,1.3,3c.7,6.4,1.1,12.7,1.3,19,.2,6.3.2,12.6,0,18.9h.1Z",
  "M417.3,44.2c-.5,2.5-1.5,4.9-2.9,7.1-1.4,2.3-3,4.4-4.7,6.3-1.8,2-3.7,3.6-5.8,5-2.1,1.4-4.2,2.5-6.3,3.3-3.9,1.4-7.8,1.9-11.6,1.4-3.9-.5-7.3-2.2-10.3-5.2-2-2.5-3.5-5.3-4.3-8.4s-1.2-6.3-1.2-9.5.5-6.4,1.3-9.4c.8-3,1.9-5.7,3.3-8.1,1.6-2.8,3.5-5.2,5.7-7s4.7-3,7.3-3.3c.7-.2,1.3,0,1.7.5s.7,1.1.7,1.9c.9-.9,2.3-1.5,4.1-2,1.9-.4,3.9-.5,6.2,0,4.3.5,7.6,1.8,10.1,3.9,2.5,2,4.3,4.4,5.5,7.1s1.8,5.5,1.9,8.5c0,3-.2,5.6-.7,8h0ZM388.4,25.8c-1.8.8-3.3,2-4.5,3.5s-2.2,3.3-2.9,5.2c-.8,2-1.2,4.1-1.5,6.3-.3,2.2-.2,4.5,0,6.6.3,3.1,1.2,5.6,2.8,7.6,1.6,2,4.1,3,7.5,3s3.9-.4,5.8-1.1,3.7-1.8,5.2-3c1.6-1.2,3.1-2.7,4.4-4.5,1.3-1.7,2.4-3.5,3.2-5.4.4-1,.8-2.2,1.1-3.7.3-1.5.4-3,.3-4.5,0-1.5-.4-3-1.1-4.5-.6-1.4-1.6-2.6-2.9-3.6-1.9-1.3-4.1-2.1-6.6-2.4-2.6-.3-5.3.3-8.1,1.7-.5.4-1.1.4-1.8.2-.7-.2-.9-.8-.7-1.7h0s-.2.3-.2.3Z",
  "M61.3,119.7c-1.3.5-2.5.6-3.5.1-1-.4-1.7-1-2.1-1.7-.6-.9-.8-1.8-.5-2.8s1-1.8,2.3-2.5c2-1.1,4.6-2.1,7.7-2.9s6.4-1,10-.6c3.5.4,6.8,1.3,9.8,2.9,3,1.5,5.5,3.5,7.6,5.9s3.7,5.1,4.8,8.2c1.1,3.1,1.6,6.3,1.5,9.6-.2,3.5-.9,7.1-2.1,10.6-1.2,3.5-2.8,6.9-4.9,10s-4.6,5.9-7.4,8.5-6.1,4.5-9.5,5.9c-2.4.6-4.2.7-5.4.3s-2.1-1-2.5-1.6c-.2-.4-.2-1-.2-1.8s.5-1.5,1.4-2.3c-1.1-8.6-1.7-16.9-1.9-24.9-.2-8-.3-15.4-.3-22-1.5.3-3,.7-4.5,1.2h-.3q0-.1,0,0ZM75.8,118c-.5,0-1.1-.1-1.7-.2h-1.7c.5.7,1,1.6,1.3,2.6s.5,2,.5,3c0,5.4,0,11.2.2,17.4.1,6.2.6,12.9,1.3,20.1,3.9-2.8,7.2-6.4,10-10.7s4.3-8.8,4.5-13.6c0-4.4-1-8.4-3.3-11.8-2.3-3.4-6-5.6-11.2-6.7h.1q0-.1,0-.1Z",
  "M147.8,139.3c.4.9,0,1.8-1.1,2.6s-2.8,1.4-5.1,1.7c-4,.5-8.1,1.1-12.2,1.7-4.2.6-8.4,1.2-12.8,1.8-.2,4.5-.2,9,0,13.6,2,0,4.5-.2,7.4-.6,2.9-.4,5.8-.9,8.8-1.5s5.9-1.3,8.7-1.9,5.2-1.2,7.1-1.7c1-.3,2-.5,3.1-.6s2-.1,2.9,0,1.5.5,2.1,1,.8,1.3.8,2.3-.3.7-.9,1.2-1.4,1.1-2.3,1.7c-.9.6-1.9,1.1-2.9,1.6s-1.9.9-2.7,1.1c-5.5,1.8-10.9,3.3-16.2,4.6-5.3,1.3-10.5,2-15.6,2.1-2.9,0-5.1-.7-6.7-2.3-1.6-1.6-2.3-4-2.4-7.1-.2-4.3-.2-8.7,0-13.2-1.5-.9-2.3-2.1-2.3-3.7.2-1.7,1-2.8,2.4-3.5.2-2.6.3-5.2.4-7.8,0-2.6.2-5.2.4-7.8-1-.2-1.8-.7-2.6-1.5-.8-.8-1.1-1.7-1.1-2.7s.2-1.5.5-2.2,1-1.2,2-1.5c1.6-.4,3.5-.8,5.8-1.2s4.7-.8,7.1-1.2,4.8-.7,7.1-.9c2.3-.3,4.2-.4,5.8-.5,1.9-.2,3.7,0,5.4.5s3.4,1.5,4.9,3.1c.4,1.2.1,2.2-.7,2.8s-1.9,1-3.3,1.2c-1.3.2-2.9.4-4.8.6s-3.8.5-5.8.7c-2,.3-4,.5-6,.7s-3.9.5-5.7.7v1.2c-.2,2.3-.3,4.6-.4,6.9,0,2.3-.2,4.6-.3,6.9,3.7-.6,7.5-1.2,11.4-1.7s7-.8,9.3-1c1.9-.2,3.7,0,5.4.7s3.4,1.7,4.8,3.2h.3q0-.1,0-.1Z",
  "M198.3,115.6c-.4.5-1,.8-1.9,1s-1.9,0-2.9-.7c-.7-.5-1.6-1.1-2.5-1.7-1-.6-2-1.1-3.2-1.7-1.1-.5-2.3-1-3.5-1.3-1.1-.4-2.3-.5-3.3-.5s-2.7.3-4.2.9-2.7,1.5-3.8,2.7c-2,2.2-2.8,4.4-2.2,6.5s2.1,4,4.6,5.8c1.6,1.2,3.3,2.3,5.2,3.5s3.7,2.4,5.5,3.5,3.5,2.3,5.2,3.3c1.6,1.1,3.1,2,4.3,2.8,1.6,1.1,3.1,2.2,4.5,3.5,1.4,1.2,2.7,2.6,3.7,4.2s1.9,3.3,2.5,5.2c.6,1.9.9,4.2.9,6.7-.6,4.9-2.6,8.8-5.8,11.6-3.2,2.9-7,4.7-11.2,5.5-3.7.7-7.4.6-11-.4s-6.6-2.8-9.1-5.6c-.6-.7-1.1-1.7-1.6-2.9-.4-1.2-.5-2.1-.1-2.7.5-.8,1.5-1.3,2.8-1.7,1.3-.3,2.4-.2,3.1.2,2,1.9,4.4,3.2,7.2,4.1,2.8.8,5.6.9,8.6.2,2.3-.5,4.2-1.5,5.6-3,1.4-1.5,2.3-3.1,2.7-5,.4-2,.2-4-.7-6s-2.6-4-5-5.7c-3.6-2.8-7.5-5.3-11.6-7.7-4.1-2.4-8.3-5.1-12.6-8.2-2-1.8-3.5-3.7-4.5-5.9-.9-2.1-1.4-4.2-1.4-6.2s.4-4.1,1.3-6c.9-1.9,2.1-3.6,3.7-5.2,1.6-1.5,3.5-2.8,5.6-3.8,2.1-1,4.5-1.5,7.1-1.7,3.6-.2,7,.5,10.2,2.2s5.9,3.7,8,6c.4.5.6,1.2.6,2s-.3,1.5-.9,2.3h.1q0-.1,0-.1Z",
  "M231.8,160.9c0,.4,0,.9,0,1.5s0,1.3-.4,2c-.3.7-.6,1.2-1.1,1.7s-1.2.7-2.1.7c-1.9-1.2-3.6-2.9-4.9-4.9-.7-2.7-1.4-5.7-1.9-9.2-.6-3.5-1-7.1-1.4-10.8-.4-3.7-.6-7.6-.7-11.5,0-3.9-.2-7.7,0-11.3,0-.6,0-1.4.2-2.4,0-1,.4-1.9.7-2.9.4-.9.8-1.7,1.3-2.4s1.3-1,2.3-1,2.1.4,2.8,1.1,1.1,1.9,1.1,3.5v11.4c0,4,.4,8.1.7,12.2.4,4.1.8,8,1.4,11.9.6,3.9,1.2,7.3,1.9,10.4h0Z",
  "M267.1,137.1c-.5,0-1,0-1.7-.2s-1.3-.3-1.9-.7c-.6-.3-1.1-.7-1.5-1.2s-.7-1-.7-1.5.4-1.6,1.3-2.6c.9-1,2.2-1.8,4.2-2.3,2.7-.6,5.5-1,8.4-1.1s5.9-.1,8.8,0,5.8.3,8.6.5,5.5.4,8,.5c1.4,0,2.4.3,2.8.8s.7,1.2.7,1.9c0,1.6-.7,2.8-2.1,3.7s-2.8,1.3-4.3,1.2c-1.5,0-3.1-.1-4.7-.1h-5.1c0,2.5,0,5.2.3,8.3.2,3.1.5,6.1.7,9.2.3,3.1.5,6.1.9,8.9.3,2.8.6,5.2.9,7.2.2.7,0,1.3-.5,1.9-.5.6-1.2.9-2.2.9-1.9,0-3.2-1.2-4.1-3.5-1.7-4.3-2.9-9.3-3.6-14.9-4.8,2.9-9.5,4.7-14.1,5.5-4.6.7-8.8.5-12.4-.5-3.7-1-6.6-2.8-8.9-5.3-2.3-2.5-3.4-5.6-3.4-9.2s.6-7.2,1.9-11.2c1.3-4,3-7.9,5.3-11.6,2.3-3.7,5-7.1,8.2-10.2,3.1-3.1,6.7-5.4,10.6-7,1.3-.4,2.6-.4,3.8-.2s2.3.7,3.3,1.3c1,.7,2,1.5,2.8,2.4s1.6,1.8,2.2,2.7c.4.6.7,1.3.8,2s-.2,1.4-.8,2c-1.3,1-2.5.9-3.5-.3-1.5-1.9-2.8-3-3.8-3.4s-2.4,0-4.2,1.1c-1.8,1.2-3.7,3.1-5.9,5.6-2.1,2.5-4.1,5.3-5.9,8.4-1.8,3.1-3.3,6.2-4.3,9.4-1.1,3.2-1.4,6.2-1.1,9,.3,2.4,1.6,4.1,4,5.1,2.4,1,5.1,1.5,8.2,1.4,3.1,0,6.1-.7,9.2-1.7s5.4-2.5,7.1-4.3c0-1.5-.2-3-.3-4.6,0-1.5,0-3.1,0-4.6-2,.2-3.9.3-5.9.5s-4,.3-6,.6h0v.2h0Z",
  "M361.9,117.8c-.6,7.5-1.4,15.2-2.2,23.1-.8,7.8-2,15.2-3.4,22.1-.4,1.7-.8,2.9-1.5,3.6s-1.5,1.2-2.7,1.5c-1,.2-2.3-.1-4.1-.9s-3.2-2-4.3-3.5c-1.5-2-3.1-4.3-4.9-6.7-1.7-2.4-3.6-4.9-5.6-7.5-2-2.5-4.1-5-6.2-7.5-2.1-2.5-4.5-4.8-6.9-6.9-.3,5.8-.5,11.6-.7,17.4-.2,5.7-.2,11.5,0,17.2,0,.8-.7,1.2-2.1,1.2s-3.1-.9-4.1-2.6c-1.1-1.7-1.7-3.5-1.9-5.2-.3-1.8-.4-4.3-.4-7.7s0-6.8.2-10.4c0-3.6.3-7.1.5-10.5.2-3.4.4-6,.5-8,.2-2.1.7-3.7,1.5-4.7s1.7-1.4,2.5-1.3c1.8.2,3,.7,3.5,1.5.6.8.9,1.9,1,3.1,3.2,2.3,6.1,4.8,8.8,7.5s5.2,5.4,7.5,8.1c2.3,2.8,4.3,5.5,6.2,8.2s3.7,5.2,5.4,7.4c1.1-5.3,1.9-11.3,2.6-17.8.7-6.6,1.4-13.4,2.1-20.6,0-.9.4-1.8,1.6-2.6,1.1-.8,2.2-1.2,3.2-1.1,2.5.2,3.7,1.4,3.7,3.7h.2q0-.1,0-.1Z"
];

// Two large, smooth, sweeping architectural waves divider at the top of footer
const FlameDivider = () => (
  <div className="w-full overflow-hidden leading-none bg-[#F1E3CB] -mb-px">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-[50px] sm:h-[80px] md:h-[110px] text-[#0267C1] block relative -mb-px"
      fill="currentColor"
    >
      <path d="M-1,122 L1201,122 L1201,50 C950,110 750,10 600,60 C450,110 250,10 -1,50 Z" />
    </svg>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showIgModal, setShowIgModal] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contatti");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      if (typeof window !== "undefined") {
        window.location.href = "/contatti#contatti";
      }
    }
  };

  return (
    <footer className="w-full bg-[#0267C1] text-[#F1E3CB] overflow-hidden relative select-none">
      {/* Top Flame Silhouette Transition from Secondary Cream to Primary Blue */}
      <FlameDivider />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-8 md:pt-10 md:pb-14 flex flex-col gap-10 md:gap-14">

        {/* 3 COLUMNS BODY (Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start text-center md:text-left">

          {/* COLUMN 1: Navigation / Navigazione */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h4 className="font-title font-bold text-base md:text-lg text-[#F1E3CB] uppercase tracking-wider">
              Navigazione
            </h4>
            <ul className="space-y-2 font-nunito font-bold text-sm md:text-base text-[#F1E3CB]/90">
              <li>
                <Link href="/" className="hover:text-[#D56108] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-sono" className="hover:text-[#D56108] transition-colors">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link href="/lavori" className="hover:text-[#D56108] transition-colors">
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:text-[#D56108] transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: Say Hi! / Parliamo! */}
          <div className="space-y-3 flex flex-col items-center justify-center text-center">
            <h4 className="font-title font-bold text-base md:text-lg text-[#F1E3CB] uppercase tracking-wider">
              PARLIAMO!
            </h4>
            <p className="font-nunito font-semibold text-xs md:text-sm text-[#F1E3CB]/90 max-w-xs">
              Hai un grande progetto in mente o cerchi soluzioni personalizzate in Stampa 3D?
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToContact}
                className="px-7 py-2.5 rounded-full bg-[#F1E3CB] text-[#0267C1] font-title font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-[#D56108] hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
              >
                PARLIAMO!
              </button>
            </div>
          </div>

          {/* COLUMN 3: Social Round Icons + Copyright */}
          <div className="space-y-4 flex flex-col items-center md:items-end text-center md:text-right relative">
            {/* Round Social Icons */}
            <div className="flex items-center gap-3 relative">
              {/* 1. LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F1E3CB] text-[#0267C1] hover:bg-[#D56108] hover:text-white transition-all flex items-center justify-center shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 stroke-current" />
              </a>

              {/* 2. Instagram Single Button */}
              <button
                type="button"
                onClick={() => setShowIgModal(true)}
                className="w-10 h-10 rounded-full bg-[#F1E3CB] text-[#0267C1] hover:bg-[#D56108] hover:text-white transition-all flex items-center justify-center shadow-sm cursor-pointer"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5 stroke-current" />
              </button>

              {/* 3. Mail Icon */}
              <a
                href="mailto:espositodesign@outlook.it"
                className="w-10 h-10 rounded-full bg-[#F1E3CB] text-[#0267C1] hover:bg-[#D56108] hover:text-white transition-all flex items-center justify-center shadow-sm"
                title="Email Direct"
              >
                <Mail className="w-5 h-5 stroke-current" />
              </a>
            </div>

            {/* Copyright */}
            <p className="font-nunito font-extrabold text-sm md:text-base text-[#F1E3CB]">
              © {currentYear} Esposito Design
            </p>
          </div>

        </div>

        {/* BOTTOM SECTION: Il Logo Vettoriale Sotto (Replacing Breaver Studios) */}
        <div className="w-full max-w-5xl mx-auto pt-2 pb-2 px-2 flex justify-center items-center">
          <svg
            viewBox="0 0 418 179.8"
            className="w-full h-auto max-h-[260px] md:max-h-[380px] drop-shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            {LOGO_PATHS.map((pathD, idx) => (
              <motion.path
                key={idx}
                d={pathD}
                fill="#F1E3CB"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}
          </svg>
        </div>

      </div>

      {/* Unclipped Instagram Profile Choice Modal */}
      <AnimatePresence>
        {showIgModal && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md select-none"
            onClick={() => setShowIgModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-[#F1E3CB] text-[#0267C1] p-6 rounded-3xl shadow-2xl border-2 border-[#0267C1]/20 space-y-5 text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#0267C1]/15 pb-3">
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-6 h-6 stroke-[#0267C1]" />
                  <span className="font-title text-xs uppercase tracking-widest font-extrabold text-[#D56108]">
                    PROFILI INSTAGRAM
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowIgModal(false)}
                  className="w-8 h-8 rounded-full bg-[#0267C1]/10 text-[#0267C1] hover:bg-[#D56108] hover:text-white transition-colors flex items-center justify-center text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="font-nunito text-xs text-[#0267C1]/80 font-medium">
                Seleziona il profilo che desideri visitare:
              </p>

              {/* Options */}
              <div className="space-y-3 pt-1">
                {/* Option 1: Branding & UX/UI */}
                <a
                  href="https://instagram.com/esposito__design"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowIgModal(false)}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-[#0267C1]/10 hover:bg-[#0267C1] hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <div className="space-y-0.5">
                    <span className="block font-title font-bold text-sm">BRANDING & UX/UI</span>
                    <span className="block font-nunito text-xs text-[#D56108] group-hover:text-white/90 font-extrabold">
                      @esposito__design
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#D56108] group-hover:text-white transition-colors shrink-0" />
                </a>

                {/* Option 2: Stampa 3D */}
                <a
                  href="https://instagram.com/esposito__design3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowIgModal(false)}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-[#0267C1]/10 hover:bg-[#0267C1] hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <div className="space-y-0.5">
                    <span className="block font-title font-bold text-sm">STAMPA 3D</span>
                    <span className="block font-nunito text-xs text-[#D56108] group-hover:text-white/90 font-extrabold">
                      @esposito__design3d
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#D56108] group-hover:text-white transition-colors shrink-0" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
