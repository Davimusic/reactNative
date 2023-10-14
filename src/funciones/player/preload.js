import { file } from "../dinamicFiles/dinamicFiles";

export async function preload(coor, bitRate) {
    const arrePa = file();
    async function getAudioFileWithLowerBitRate(originalUrl) {       
        const fileUrl = originalUrl.split('https://res.cloudinary.com/dplncudbq/video/upload/')[1];
        return `https://res.cloudinary.com/dplncudbq/video/upload/br_${bitRate}/${fileUrl}`;
    }
    if (preloadSoundObject) {
        await preloadSoundObject.unloadAsync();
    }
    const { sound } = await Audio.Sound.createAsync(
        { uri: await getAudioFileWithLowerBitRate(arrePa[coor].linkAudio),
            shouldCorrectPitch: false, }
    );
    preloadSoundObject = sound;
}