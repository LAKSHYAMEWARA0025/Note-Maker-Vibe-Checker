import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "./App";
// import { Row, Col } from "react-bootstrap";  // Added bootstrap grid classes
import './NoteLayout.css'
type NoteLayoutProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);
  if (note == null) return <Navigate to="/" replace />;

  return (
    <div className="note-layout-container">
      {/* <Row className="mb-4">
        <Col xs={12} md={8} className="mx-auto">
          <h1>{note.title}</h1>
          <div className="note-content">
            <p>{note.markdown}</p>
            {/* You can add more elements as needed */}
          {/* </div>
        </Col>
      </Row> */} 
      <Outlet context={note} />
    </div>
  );
}

export function useNote() {
  return useOutletContext<Note>();
}
