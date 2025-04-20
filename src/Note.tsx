import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

type NoteProps = {
  onDelete: (id: string) => void;
};

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col xs={12} md={8}>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal" className="flex-wrap justify-content-end">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary" className="mb-2">
                Edit
              </Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(note.id);
                navigate("/");
              }}
              variant="outline-danger"
              className="mb-2"
            >
              Delete
            </Button>
            <Link to="/">
              <Button variant="outline-secondary" className="mb-2">
                Back
              </Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <div className="markdown-content">
        <ReactMarkdown>{note.markdown}</ReactMarkdown>
      </div>
    </>
  );
}

