function footer () {
    const icons = [
       {
        name: 'instagram',
        link: 'https://www.instagram.com/sayles.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
       },
       {
        name: 'TikTok',
        link: 'https://www.tiktok.com/@sayles.nails?_t=8albo5k9bo6&_r=1',
       },
       {
        name: 'Email',
        link: 'mailto:'
       },
    ]

    return (
        <footer>
            {icons.map(icon => (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            ))}
        </footer>
    );
}

export default footer;