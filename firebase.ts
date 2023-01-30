import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: 'AIzaSyALBymiDb36nsf_K7kCBm0OoKHGkq-dmXc',
  authDomain: 'chat-program-6cb33.firebaseapp.com',
  databaseURL: 'https://chat-program-6cb33-default-rtdb.firebaseio.com',
  projectId: 'chat-program-6cb33',
  storageBucket: 'chat-program-6cb33.appspot.com',
  messagingSenderId: '151693428486',
  appId: '1:151693428486:web:10276690b6d4fdc4f70087',
  measurementId: 'G-XRXZH04XKN',
};

// firebase 초기화
export const app = initializeApp(firebaseConfig);

// firebase 인증 초기화 및 서비스 참조 가져오기
export const auth = getAuth();
export const db = getFirestore();
