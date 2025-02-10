import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursefilterService {
// Function to check if the provided text contains any curse words
hasCurseWords(text: string): boolean {
  // Define your list of curse words
  const curseWords = ['ezab', 'ezebi', 'nik', 'nikom', 'nikomek', 'dirrab', 'dirrabek', 'zokom', 'zokomek', 'asba']; // Add your curse words here

  // Convert the text to lowercase for case-insensitive comparison
  const lowercaseText = text.toLowerCase();

  // Check if any curse word exists in the text
  return curseWords.some(word => lowercaseText.includes(word));
}

// Function to filter out curse words from the provided text
filterCurseWords(text: string): string {
  // Define your list of curse words
  const curseWords = ['ezab', 'ezebi', 'nik', 'nikom', 'nikomek', 'dirrab', 'dirrabek', 'zokom', 'zokomek', 'asba']; // Add your curse words here

  // Replace curse words with asterisks (*) in the text
  return curseWords.reduce((filteredText, curseWord) => {
    const regex = new RegExp(curseWord, 'gi'); // 'gi' for case-insensitive global search
    return filteredText.replace(regex, '*'.repeat(curseWord.length));
  }, text);
}
}
