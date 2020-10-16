package Vladimir_Mikic_II_532015_APRSP.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import Vladimir_Mikic_II_532015_APRSP.jpa.Igrac;
import Vladimir_Mikic_II_532015_APRSP.jpa.Tim;

public interface IgracRepository extends JpaRepository<Igrac, Integer>{
	
	public Collection<Igrac> findByTimBean (Tim t); 

}

