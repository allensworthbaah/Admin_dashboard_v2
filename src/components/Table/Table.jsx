import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import UilDesktop from '@iconscout/react-unicons/icons/uil-desktop';

function createData(memberName, chwName, serviceDate, serviceType, modality, durationMinutes, status, reviewedAt) {
  return { memberName, chwName, serviceDate, serviceType, modality, durationMinutes, status, reviewedAt };
}

const rows = [
  createData('Mary A.', 'Denise Okafor', '2026-08-04', 'Health education', 'in_person', 45, 'billed', '2026-08-05T14:22:00Z'),
  createData('Ralph D.', 'Marcus Webb', '2026-08-06', 'Care coordination', 'phone', 20, 'note_generated', null),
  createData('Tanya N.', 'Denise Okafor', '2026-08-07', 'SDOH assessment', 'telehealth', 30, 'draft', null),
  createData('Keith B.', 'Priya Chandrasekaran', '2026-08-08', 'Crisis support', 'in_person', 60, 'reviewed', '2026-08-08T18:00:00Z'),
  createData('Jane W.', 'Marcus Webb', '2026-08-09', 'Medication reminder', 'phone', 15, 'billed', '2026-08-09T13:10:00Z'),
];

const modalityConfig = {
  in_person: { label: "In person", icon: UilUser },
  phone: { label: "Phone", icon: UilPhone },
  telehealth: { label: "Telehealth", icon: UilDesktop },
};

const statusConfig = {
  draft: { label: "Draft", color: "default" },
  note_generated: { label: "Note generated", color: "warning" },
  reviewed: { label: "Reviewed", color: "info" },
  billed: { label: "Billed", color: "success" },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDuration(minutes) {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h} hr` : `${h} hr ${m} min`;
}

export default function BasicTable() {
  return (
    <div className="table">
        <h3>Recent Encounters</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="encounters table">
            <TableHead>
            <TableRow>
                <TableCell>Member</TableCell>
                <TableCell>CHW</TableCell>
                <TableCell>Service date</TableCell>
                <TableCell>Service type</TableCell>
                <TableCell>Modality</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Reviewed</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => {
                const modality = modalityConfig[row.modality];
                const status = statusConfig[row.status];
                const ModalityIcon = modality.icon;

                return (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.memberName}
                    </TableCell>
                    <TableCell>{row.chwName}</TableCell>
                    <TableCell>{formatDate(row.serviceDate)}</TableCell>
                    <TableCell>{row.serviceType}</TableCell>
                    <TableCell>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <ModalityIcon size="16" />
                            {modality.label}
                        </span>
                    </TableCell>
                    <TableCell align="right">{formatDuration(row.durationMinutes)}</TableCell>
                    <TableCell>
                        <Chip label={status.label} color={status.color} size="small" />
                    </TableCell>
                    <TableCell>
                        {row.reviewedAt ? formatDate(row.reviewedAt) : "—"}
                    </TableCell>
                    </TableRow>
                );
            })}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}