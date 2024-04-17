import Card from "@/components/bento/CardTemplate";
import Link from "@/components/ui/Link";
import { FaGithub } from "react-icons/fa";

export default function X() {
  return (
    <Link
      href="https://github.com/Leo416732"
      className="col-span-1 row-span-1 no-underline"
    >
      <Card className="flex aspect-square flex-col gap-1.5">
        <div className="h-8 w-8">
          <FaGithub className="text-3xl" />
        </div>
        <p className="text-secondary">Github</p>
        <p className="line-clamp-2">Just added new Repositories!</p>
      </Card>
    </Link>
  );
}
