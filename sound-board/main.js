const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const container = document.querySelector('.container')
const audios = document.querySelectorAll('audio')

sounds.forEach(sound =>
{
    const btn = document.createElement('button')
    btn.innerHTML = sound
    container.append(btn)


    btn.onclick = () =>
    {
        audios.forEach(audio =>
        {
            if (btn.innerHTML == audio.id)
            {
                audios.forEach(audio =>
                {
                    audio.pause()
                    audio.currentTime = 0
                })
                audio.play()
            }
        })
    }
})