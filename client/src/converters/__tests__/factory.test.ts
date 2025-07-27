import { converterFactory } from '../converter-factory';

jest.mock('@ffmpeg/ffmpeg', () => ({ FFmpeg: class {} }));
jest.mock('@ffmpeg/util', () => ({ fetchFile: jest.fn() }));

const imageFormats = ['jpg', 'jpeg', 'png', 'heic', 'avif', 'webp'] as const;
const videoFormats = ['mp4', 'webm', 'mov', 'avi', 'mkv'] as const;

describe('ConverterFactory supported formats', () => {
  it('returns all supported input formats', () => {
    const formats = converterFactory.getSupportedInputFormats().sort();
    const expected = [...imageFormats, ...videoFormats].sort();
    expect(formats).toEqual(expected);
  });

  it('returns supported output formats for images', () => {
    const formats = converterFactory.getSupportedOutputFormats('jpg').sort();
    expect(formats).toEqual([...imageFormats].sort());
  });

  it('returns supported output formats for videos', () => {
    const formats = converterFactory.getSupportedOutputFormats('mp4').sort();
    expect(formats).toEqual([...videoFormats].sort());
  });
});
