import FileSaver from 'file-saver';

import { supriseMePrompts } from '../constants';

export function getRandomPrompt(prompt: string) {
  const randomIndex = Math.floor(Math.random() * supriseMePrompts.length);
  const randomPrompt = supriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export function downloadImage(_id: string, photo: string) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
