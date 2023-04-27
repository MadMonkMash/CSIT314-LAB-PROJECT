from sqlalchemy import Column, Integer, String, ForeignKey, Double
from database import Base
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy import ForeignKey
from typing import List



class ServiceType(Base):
    __tablename__ = "service_type"

    id = Column(Integer, primary_key=True, nullable=False)
    service_type_name = Column(String(255))
    professional = relationship("Professional", back_populates="service_type")
    
    def __init__(self, service_type, cost_per_service):
        self.service_type = service_type

    def __repr__(self) -> str:
        return f"id={self.id}, service_type={self.service_type}, cost_per_service={self.cost_per_service}"