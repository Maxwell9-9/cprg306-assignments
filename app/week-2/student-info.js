import Link from "next/link";

export default function StudentInfo() {
    const studentName = "Carter Maxwell Reyta";
    const githubLink = "https://github.com/AbnormalMatrix"
    return (
        <div>
            <p>{studentName}</p>
            <Link href={githubLink}>{githubLink}</Link>
        </div>
        

    )
}